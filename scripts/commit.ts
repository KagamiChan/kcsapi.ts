/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * This script is to process and move json files into samples folder
 * All json files are put into staging folder at first
 * They are saved to correct path in samples folder after being anonymized
 */

import fs, { WriteOptions } from 'fs-extra'
import glob from 'glob'
import path from 'path'
import Promise from 'bluebird'
import {
  map,
  mapValues,
  isArray,
  isObject,
  isString,
  isNumber,
  isNull,
  entries,
  fromPairs,
} from 'lodash'
import assert from 'assert'
import chalk from 'chalk'

import { PoiPacket } from './types'
import { getType, getSampleList } from './utils'

/**
 * recusively replaces information in given data
 * @param data any
 */
/* tslint:disable-next-line no-any */
const anonymize = (data: any): any => {
  if (isArray(data)) {
    return map(data, anonymize)
  }
  if (isObject(data)) {
    return mapValues(data, anonymize)
  }
  if (isString(data)) {
    return 'Tanaka'
  }
  if (isNumber(data)) {
    return 1
  }
  assert.ok(isNull(data))
  return null
}

/**
 * builds path to save in samples folder
 * @param data poi packet
 * @returns [requestPath, responsePath]
 */
const buildPath = (data: PoiPacket, basename: string): string[] => [
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'request', basename),
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'response', basename),
]

/**
 * builds existing type path in samples folder
 * @param data poi packet
 * @returns [requestTypePath, responseTypePath]
 */
const buildTypePath = (data: PoiPacket): string[] => [
  path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'request.ts'),
  path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'response.ts'),
]

/* tslint:disable-next-line no-any */
const diffInType = async (data: any, typePath: string) => {
  const incoming = await getType(data, typePath)
  const existing = await fs.readFile(typePath, 'utf8')

  return incoming !== existing
}

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../staging/**/*.json'))

  const sampleGroup = await getSampleList()

  const existingSamples = await Promise.map(entries(sampleGroup), async ([f, files]) => {
    const json = await Promise.map(files, file => fs.readJSON(file))

    return [f, json]
  })

  const samples = fromPairs(existingSamples)

  await Promise.map(files, async file => {
    const packet: PoiPacket = await fs.readJSON(file)

    packet.body = anonymize(packet.body)
    packet.postBody = anonymize(packet.postBody)

    const [requestPath, responsePath] = buildPath(packet, path.basename(file))
    const [requestTypePath, responseTypePath] = buildTypePath(packet)

    const candidateRequests = [...(samples[requestTypePath] || []), packet.postBody]
    const candidateResponses = [...(samples[responseTypePath] || []), packet.body]

    if (
      (await diffInType(candidateRequests, requestTypePath)) ||
      (await diffInType(candidateResponses, responseTypePath))
    ) {
      console.log(chalk.green(`${file} has different type, saving for further processing`))
      return Promise.all([
        fs.outputJSON(requestPath, packet.postBody, { spaces: 2 }),
        fs.outputJSON(responsePath, packet.body, { spaces: 2 }),
      ])
    }

    console.log(chalk.blue(`${file} complies with current type, skipping`))
    return Promise.resolve()
  })
}

main()
