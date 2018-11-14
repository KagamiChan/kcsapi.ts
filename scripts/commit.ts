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
  cloneDeep,
  set,
  map,
  get,
  mapValues,
  isArray,
  isObject,
  isString,
  isNumber,
  isNull,
} from 'lodash'
import assert from 'assert'

import { PoiPacket } from './types'

/**
 * recusively replaces api_member_id in given data
 * @param data any
 * @param key used for mapValues method in recursion
 */
/* tslint:disable-next-line no-any */
const anonymize = (data: any, key?: string): any => {
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

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../staging/**/*.json'))

  await Promise.map(files, async file => {
    const packet: PoiPacket = await fs.readJSON(file)

    packet.body = anonymize(packet.body)
    packet.postBody = anonymize(packet.postBody)

    const [requestPath, responsePath] = buildPath(packet, path.basename(file))

    return Promise.all([
      fs.outputJSON(requestPath, packet.postBody, { spaces: 2 }),
      fs.outputJSON(responsePath, packet.body, { spaces: 2 }),
    ])
  })
}

main()
