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
import { getTopLevel, getType, prettify, getSampleList, getSchema } from './utils'

const main = async () => {
  const fileGroup = await getSampleList()

  await Promise.map(entries(fileGroup), async ([filename, files]) => {
    const json = await Promise.map(files, file => fs.readJSON(file))
    const result = await getType(json, filename)

    const schema = await getSchema(json, filename)

    return Promise.all([
      fs.outputFile(filename, result),
      fs.outputJSON(filename.replace(/\.ts$/, '.json'), JSON.parse(schema), { spaces: 2 }),
    ])
  })

  const index = map(Object.keys(fileGroup), filename => {
    const topLevel = getTopLevel(filename)
    const relative = path.relative(path.resolve(__dirname, '../'), filename).replace('.ts', '')
    return `export { ${topLevel} } from './${relative}'`
  }).join('\n')

  await fs.outputFile(path.resolve(__dirname, '../index.ts'), prettify(copyright + '\n' + index))
}

main()
