import { Readable } from 'stream'
import path from 'path'
import childProcess from 'child_process'
import prettier from 'prettier'
import glob from 'glob'
import { groupBy, Dictionary } from 'lodash'

import { copyright, getEndPointComment } from './comments'

const getQuicktypeCli = (): string =>
  path.resolve(__dirname, '../node_modules/quicktype/dist/cli/index.js')

/**
 * Turns first character to upper case
 * @param content string to capitalize
 */
const capitalize = (content: string): string =>
  `${content[0].toUpperCase()}${content.slice(1, content.length)}`

const acronymMap: { [key: string]: string } = {
  api: 'API',
  oss: 'OSS',
  sp: 'SP',
}

const capitalizeSegment = (content: string): string => acronymMap[content] || capitalize(content)

const retainTopLevelName = (content: string, topLevel: string): string => {
  if (new RegExp(`\\bexport interface ${topLevel}\\b`).test(content)) {
    return content
  }

  return content.split(`${topLevel}Class`).join(topLevel)
}

/**
 * Derives top level interface name from file path
 * @param filename the path
 */
export const getTopLevel = (filename: string): string =>
  path
    .relative(path.resolve(__dirname, '../'), filename)
    .replace(path.extname(filename), '')
    .split(/[_/\\]/)
    .map(capitalizeSegment)
    .join('')

export const prettify = (content: string): string =>
  prettier.format(content, {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    parser: 'typescript',
  })

/**
 * Feeds sample data to spawned quicktype and generate types
 * @param data sample data for generation
 * @param topLevel top level interface name
 */
/* tslint:disable-next-line no-any */
export const getType = (data: any, filename: string, noMaps = false): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const topLevel = getTopLevel(filename)
    const quicktypeCli = getQuicktypeCli()

    const args = [
      '--alphabetize-properties',
      '--no-enums',
      '--just-types',
      '--lang',
      'ts',
      '--top-level',
      topLevel,
    ]
    if (noMaps) {
      args.push('--no-maps')
    }

    const child = childProcess.spawn(process.execPath, [quicktypeCli, ...args])
    let result = ''
    let error = ''
    child.stdout.on('data', chunk => {
      result += chunk
    })
    child.stderr.on('data', chunk => {
      error += chunk
    })
    child.on('error', reject)
    child.on('close', (code, signal) => {
      if (code > 0) {
        reject(
          new Error(error || `quicktype exited with code ${code}${signal ? ` (${signal})` : ''}`),
        )
        return
      }
      const normalizedResult = retainTopLevelName(result, topLevel)

      resolve(
        normalizedResult.length
          ? prettify(`${copyright}\n${getEndPointComment(filename)}${normalizedResult}`)
          : '',
      )
    })
    const source = new Readable()
    source._read = (): void => {} // eslint-disable-line @typescript-eslint/unbound-method, no-underscore-dangle
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
export const getSchema = (data: any, filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const topLevel = getTopLevel(filename)
    const quicktypeCli = getQuicktypeCli()

    const child = childProcess.spawn(process.execPath, [
      quicktypeCli,
      '--alphabetize-properties',
      '--no-enums',
      '--lang',
      'schema',
      '--top-level',
      topLevel,
    ])
    let result = ''
    let error = ''
    child.stdout.on('data', chunk => {
      result += chunk
    })
    child.stderr.on('data', chunk => {
      error += chunk
    })
    child.on('error', reject)
    child.on('close', (code, signal) => {
      if (code > 0) {
        reject(
          new Error(error || `quicktype exited with code ${code}${signal ? ` (${signal})` : ''}`),
        )
        return
      }
      resolve(result.toString())
    })
    const source = new Readable()
    source._read = (): void => {} // eslint-disable-line @typescript-eslint/unbound-method, no-underscore-dangle
    source.push(JSON.stringify(data))
    source.push(null)
    source.pipe(child.stdin)
  })

export const getSampleList = (): Dictionary<string[]> => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  return groupBy<string>(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )
}
