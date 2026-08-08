/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * This script is to process and move json files into samples folder
 * The json files are read directly from the packet source folder, only those
 * saved after `KCSAPI_LIMIT` are considered
 * They are saved to correct path in samples folder after being anonymized
 *
 * Pass `--advance` to move `KCSAPI_LIMIT` to the start of this run once it
 * finishes without error, so that the next run only sees newer packets
 */

import fs from 'fs-extra'
import glob from 'glob'
import path from 'path'
import bluebird from 'bluebird'
import {
  get,
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
import mm from 'micromatch'
import draft06Schema from 'ajv/lib/refs/json-schema-draft-06.json'

import { PoiPacket } from './types'
import { getSchema } from './utils'
import { getSource, getLimit, updateLimit, LIMIT_KEY } from './env'

const IGNORED_PATTERNS = ['**/api_get_member/payitem/**', '**/api_req_ranking/**']

/**
 * glob only understands forward slashes, and its results always use them,
 * so every path used as a glob pattern or as a lookup key has to go through this
 * @param target a path built by `path.resolve` / `path.join`
 */
const slash = (target: string): string => target.replace(/\\/g, '/')

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
  slash(
    path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'request', basename),
  ),
  slash(
    path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'response', basename),
  ),
]

/**
 * builds schema path in samples folder
 * @param data poi packet
 * @returns [requestTypePath, responseTypePath]
 */
const buildSchemaPath = (data: PoiPacket): string[] => [
  slash(path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'request.json')),
  slash(path.resolve(__dirname, '../', data.path.replace('/kcsapi/', ''), 'response.json')),
]

/**
 * lists the packets saved after the given limit, skipping the ignored endpoints
 * @param source packet source folder
 * @param limit timestamp, packets saved at or before it are skipped
 */
const collect = (source: string, limit: number): string[] =>
  glob
    .sync(slash(path.join(source, '**/*.json')))
    .filter(file => {
      const saved = get(/.*\/(.*)\.json$/.exec(file), 1, '')
      return Boolean(saved) && +saved > limit
    })
    .filter(file => !IGNORED_PATTERNS.some(pattern => mm.isMatch(file, pattern)))

const main = async (): Promise<void> => {
  const shouldAdvance = process.argv.includes('--advance')
  const limit = getLimit()
  // taken before processing, so that packets saved while the script runs are not skipped next time
  const startedAt = new Date()

  const files = collect(getSource(), limit)

  console.info(`${files.length} packet(s) to process`)

  const allschemas = glob.sync(slash(path.resolve(__dirname, '../api_*/**/*.json')))

  const schemas = fromPairs(
    await bluebird.map(allschemas, async file => {
      const schema = await fs.readJSON(file)

      return [file, schema]
    }),
  )

  const staging: { [key: string]: {} } = {}

  const schemaToFilePaths: { [key: string]: string[] } = {}

  const unreadable: string[] = []

  await bluebird.each(files, async file => {
    let packet: PoiPacket
    try {
      packet = await fs.readJSON(file)
    } catch (e) {
      // poi occasionally leaves an empty or half written packet behind,
      // there is nothing to recover from it so just move on
      unreadable.push(file)
      return bluebird.resolve()
    }

    packet.body = anonymize(packet.body)
    packet.postBody = anonymize(packet.postBody)

    const [reqPath, respPath] = buildPath(packet, path.basename(file))
    const [reqSchemaPath, respSchemaPath] = buildSchemaPath(packet)

    // FIXME: some requst data unexpectedly get mad
    if (JSON.stringify(packet.postBody).includes('api_token')) {
      return bluebird.resolve()
    }

    return bluebird.each(
      zip([packet.postBody, packet.body], [reqPath, respPath], [reqSchemaPath, respSchemaPath]),
      async ([data, filePath, schemaPath]) => {
        if (!schemas[schemaPath!]) {
          // unknown endpoint, add to staging, and temporarily create schema
          console.info(chalk.green(`${schemaPath} is a new comer, staging`))

          staging[filePath!] = data
          const schema = await getSchema([data], filePath!)
          schemas[schemaPath!] = JSON.parse(schema)

          schemaToFilePaths[schemaPath!] = (schemaToFilePaths[schemaPath!] || []).concat(filePath!)

          return bluebird.resolve()
        }

        try {
          const schema = schemas[schemaPath!]

          // since we generate schema using arrays of data, we should also feed an array
          const valid = ajv.validate(schema, [data])

          if (valid) {
            return bluebird.resolve()
          }

          console.info(chalk.green(`${schemaPath} has different type, staging`))
          // incoming file does not comply with current schema, add to staging, and temporarily update schema
          staging[filePath!] = data

          const existings = glob.sync(
            slash(
              path.resolve(__dirname, '../samples', packet.path.replace('/kcsapi/', ''), '*.json'),
            ),
          )

          const incomings = map(schemaToFilePaths[schemaPath!], fp => staging[fp])

          const json = await bluebird.map(existings, f => fs.readJSON(f))
          const newSchema = await getSchema([json, data, ...incomings], schemaPath!)

          console.info(chalk.green(`${schemaPath} schema temperarily updates`))

          ajv.removeSchema(schema)
          schemas[schemaPath!] = JSON.parse(newSchema)

          schemaToFilePaths[schemaPath!] = (schemaToFilePaths[schemaPath!] || []).concat(filePath!)

          return bluebird.resolve()
        } catch (e) {
          console.info(e)
          process.exitCode = 1
          return bluebird.resolve()
        }
      },
    )
  })

  if (unreadable.length) {
    console.info(chalk.yellow(`${unreadable.length} packet(s) skipped, not readable as JSON`))
  }

  if (Object.keys(staging).length) {
    console.info(chalk.yellow('commiting'))
  }
  await bluebird.map(Object.keys(staging), f => fs.outputJSON(f, staging[f], { spaces: 2 }))

  if (!shouldAdvance) {
    console.info(chalk.yellow(`${LIMIT_KEY} left untouched, pass --advance to move it`))
    return
  }
  if (process.exitCode) {
    console.info(chalk.red(`${LIMIT_KEY} left untouched because the run had errors`))
    return
  }
  await updateLimit(startedAt)
}

main().catch(e => {
  console.error(chalk.red(e))
  console.error(chalk.red(`${LIMIT_KEY} left untouched because the run failed`))
  process.exitCode = 1
})
