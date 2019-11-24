/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * Generates types from sample files
 */

import bluebird from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import { compact, map, entries } from 'lodash'

import { copyright } from './comments'
import { getTopLevel, getType, prettify, getSampleList, getSchema } from './utils'

const main = async (): Promise<void> => {
  const fileGroup = getSampleList()

  const ignoreList: string[] = []

  await bluebird.map(entries(fileGroup), async ([filename, files]) => {
    const json = await bluebird.map(files, file => fs.readJSON(file))
    const result = await getType(json, filename)

    const schema = await getSchema(json, filename)

    if (!result) {
      ignoreList.push(filename)
    }

    return bluebird.all([
      result ? fs.outputFile(filename, result) : bluebird.resolve(),
      fs.outputJSON(filename.replace(/\.ts$/, '.json'), JSON.parse(schema), { spaces: 2 }),
    ])
  })

  const index = compact(
    map(Object.keys(fileGroup), filename => {
      if (ignoreList.includes(filename)) {
        return ''
      }
      const topLevel = getTopLevel(filename)
      const relative = path.relative(path.resolve(__dirname, '../'), filename).replace('.ts', '')
      return `export { ${topLevel} } from './${relative}'`
    }),
  ).join('\n')

  await fs.outputFile(path.resolve(__dirname, '../index.ts'), prettify(`${copyright}\n${index}`))
}

main()
