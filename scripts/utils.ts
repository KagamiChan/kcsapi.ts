import { Readable } from 'stream'
import Promise from 'bluebird'
import path from 'path'
import childProcess from 'child_process'
import prettier from 'prettier'
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
      resolve(prettify(copyright + '\n' + getEndPointComment(filename) + result.toString()))
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
    .replace('.ts', '')
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
