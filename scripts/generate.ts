/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * Generates types from sample files
 */

import { Readable } from 'stream'
import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import childProcess from 'child_process'
import { groupBy, map, entries } from 'lodash'
import prettier from 'prettier'

import { copyright } from './copyright'

/**
 * Feeds sample data to spawned quicktype and generate types
 * @param data sample data for generation
 * @param topLevel top level interface name
 */
/* tslint:disable-next-line no-any */
const getType = (data: any, topLevel: string) =>
  new Promise<string>((resolve, reject) => {
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
const getTopLevel = (filename: string) =>
  path
    .relative(path.resolve(__dirname, '../'), filename)
    .replace('.ts', '')
    .split(/[_\/\\]/)
    .map(capitalize)
    .join('')
    .replace('Api', 'API')

const prettify = (content: string) =>
  prettier.format(content, {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    parser: 'typescript',
  })

const main = async () => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  const fileGroup = groupBy(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )

  await Promise.each(entries(fileGroup), async ([filename, files]) => {
    const topLevel = getTopLevel(filename)
    const json = await Promise.map(files, file => fs.readJSON(file))
    const raw = await getType(json, topLevel)

    const result = prettify(copyright + '\n' + raw)

    return fs.outputFile(filename, result)
  })

  const index = map(Object.keys(fileGroup), filename => {
    const topLevel = getTopLevel(filename)
    const relative = path.relative(path.resolve(__dirname, '../'), filename).replace('.ts', '')
    return `export { ${topLevel} } from './${relative}'`
  }).join('\n')

  await fs.outputFile(path.resolve(__dirname, '../index.ts'), prettify(copyright + '\n' + index))
}

main()
