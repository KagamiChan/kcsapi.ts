/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * Generates types from sample files
 */

import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import { groupBy, map, entries } from 'lodash'

import { copyright } from './comments'
import { getTopLevel, getType, prettify } from './utils'

const main = async () => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  const fileGroup = groupBy(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )

  await Promise.each(entries(fileGroup), async ([filename, files]) => {
    const json = await Promise.map(files, file => fs.readJSON(file))
    const result = await getType(json, filename)

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
