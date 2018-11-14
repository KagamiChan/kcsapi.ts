import { Readable } from 'stream'
import Promise from 'bluebird'
import path from 'path'
import childProcess from 'child_process'
import prettier from 'prettier'
import glob from 'glob'
import { groupBy } from 'lodash'

import { copyright, getEndPointComment } from './comments'

/**
 * Feeds sample data to spawned quicktype and generate types
 * @param data sample data for generation
 * @param topLevel top level interface name
 */
/* tslint:disable-next-line no-any */
export const getType = (data: any, filename: string) =>
  new Promise<string>((resolve, reject) => {
    const topLevel = getTopLevel(filename)
    const bin = path.resolve(__dirname, '../node_modules/.bin/quicktype')

    const child = childProcess.spawn(bin, [
      '--alphabetize-properties',
      '--no-enums',
      '--just-types',
      '--lang',
      'ts',
      '--top-level',
      topLevel,
    ])
    let result = ''
    child.stdout.on('data', chunk => (result += chunk))
    child.on('close', (code, signal) => {
      if (code > 0) {
        reject(signal)
      }
      resolve(
        result.length ? prettify(copyright + '\n' + getEndPointComment(filename) + result) : '',
      )
    })
    const source = new Readable()
    source._read = () => {}
    source.push(JSON.stringify(data))
    source.push(null)
    source.pipe(child.stdin)
  })

/**
 * Feeds sample data to spawned quicktype and generate json schemas
 * @param data sample data for generation
 * @param topLevel top level interface name
 */
/* tslint:disable-next-line no-any */
export const getSchema = (data: any, filename: string) =>
  new Promise<string>((resolve, reject) => {
    const topLevel = getTopLevel(filename)
    const bin = path.resolve(__dirname, '../node_modules/.bin/quicktype')

    const child = childProcess.spawn(bin, [
      '--alphabetize-properties',
      '--no-enums',
      '--lang',
      'schema',
      '--top-level',
      topLevel,
    ])
    let result = ''
    child.stdout.on('data', chunk => (result += chunk))
    child.on('close', (code, signal) => {
      if (code > 0) {
        reject(signal)
      }
      resolve(result.toString())
    })
    const source = new Readable()
    source._read = () => {}
    source.push(JSON.stringify(data))
    source.push(null)
    source.pipe(child.stdin)
  })

/**
 * Turns first character to upper case
 * @param content string to capitalize
 */
const capitalize = (content: string) =>
  `${content[0].toUpperCase()}${content.slice(1, content.length)}`

/**
 * Derives top level interface name from file path
 * @param filename the path
 */

export const getTopLevel = (filename: string) =>
  path
    .relative(path.resolve(__dirname, '../'), filename)
    .replace(path.extname(filename), '')
    .split(/[_\/\\]/)
    .map(capitalize)
    .join('')
    .replace('Api', 'API')

export const prettify = (content: string) =>
  prettier.format(content, {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    parser: 'typescript',
  })

export const getSampleList = async () => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  return groupBy<string>(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )
}
