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
  fromPairs,
  zip,
} from 'lodash'
import assert from 'assert'
import chalk from 'chalk'
import Ajv from 'ajv'

import { PoiPacket } from './types'
import { getType, getSchema } from './utils'

const draft06Schema = require('ajv/lib/refs/json-schema-draft-06.json')
const ajv = new Ajv({ validateSchema: false, addUsedSchema: false })
ajv.addMetaSchema(draft06Schema)

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
 * @returns [reqPath, respPath]
 */
const buildPath = (data: PoiPacket, basename: string): string[] => [
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'request', basename),
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'response', basename),
]

/**
 * builds schema path in samples folder
 * @param data poi packet
 * @returns [requestTypePath, responseTypePath]
 */
const buildSchemaPath = (data: PoiPacket): string[] => [
  path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'request.json'),
  path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'response.json'),
]

/* tslint:disable-next-line no-any */
const diffInType = async (data: any, typePath: string) => {
  const incoming = await getType(data, typePath)
  const existing = await fs.readFile(typePath, 'utf8')

  return incoming !== existing
}

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../staging/**/*.json'))

  const allschemas = glob.sync(path.resolve(__dirname, '../api_*/**/*.json'))

  const schemas = fromPairs(
    await Promise.map(allschemas, async file => {
      const schema = await fs.readJSON(file)

      return [file, schema]
    }),
  )

  const staging: { [key: string]: {} } = {}

  const schemaToFilePaths: { [key: string]: string[] } = {}

  await Promise.each(files, async file => {
    const packet: PoiPacket = await fs.readJSON(file)

    packet.body = anonymize(packet.body)
    packet.postBody = anonymize(packet.postBody)

    const [reqPath, respPath] = buildPath(packet, path.basename(file))
    const [reqSchemaPath, respSchemaPath] = buildSchemaPath(packet)

    // FIXME: some requst data unexpectedly get mad
    if (JSON.stringify(packet.postBody).includes('api_token')) {
      return Promise.resolve()
    }

    await Promise.each(
      zip([packet.postBody, packet.body], [reqPath, respPath], [reqSchemaPath, respSchemaPath]),
      async ([data, filePath, schemaPath]) => {
        if (!schemas[schemaPath!]) {
          // unknown endpoint, add to staging, and temporarily create schema
          console.info(chalk.green(`${schemaPath} is a new comer, staging`))

          staging[filePath!] = data
          const schema = await getSchema([data], filePath!)
          schemas[schemaPath!] = JSON.parse(schema)

          schemaToFilePaths[schemaPath!] = (schemaToFilePaths[schemaPath!] || []).concat(filePath!)

          return Promise.resolve()
        }

        try {
          const schema = schemas[schemaPath!]

          // since we generate schema using arrays of data, we should also feed an array
          const valid = ajv.validate(schema, [data])

          if (valid) {
            console.info(`${schemaPath} complies with current type, skipping`)
            return Promise.resolve()
          }

          console.info(chalk.green(`${schemaPath} has different type, staging`))
          // incoming file does not comply with current schema, add to staging, and temporarily update schema
          staging[filePath!] = data

          const existings = glob.sync(
            path.resolve(__dirname, '../samples', packet.path.replace('/kcsapi/', ''), '*.json'),
          )

          const incomings = map(schemaToFilePaths[schemaPath!], fp => staging[fp])

          const json = await Promise.map(existings, f => fs.readJSON(f))
          const newSchema = await getSchema([json, data, ...incomings], schemaPath!)

          console.info(chalk.green(`${schemaPath} schema temperarily updates`))

          ajv.removeSchema(schema)
          schemas[schemaPath!] = JSON.parse(newSchema)

          schemaToFilePaths[schemaPath!] = (schemaToFilePaths[schemaPath!] || []).concat(filePath!)
        } catch (e) {
          console.info(e)
          process.exitCode = 1
        }
      },
    )
  })

  if (Object.keys(staging).length) {
    console.info(chalk.yellow('commiting'))
  }
  return Promise.map(Object.keys(staging), f => fs.outputJSON(f, staging[f], { spaces: 2 }))
}

main()
