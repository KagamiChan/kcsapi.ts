import { Readable } from 'stream'
import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import childProcess from 'child_process'
import { capitalize, groupBy, mapValues, map, entries } from 'lodash'
import prettier from 'prettier'

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

const main = async () => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  const fileGroup = groupBy(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )

  await Promise.each(entries(fileGroup), async ([filename, files]) => {
    const topLevel = path
      .relative(path.resolve(__dirname, '../'), filename)
      .replace('.ts', '')
      .split(/[_\/\\]/)
      .map(capitalize)
      .join('')
    const json = await Promise.map(files, file => fs.readJSON(file))
    const raw = await getType(json, topLevel)

    const result = prettier.format(raw, {
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 100,
      parser: 'typescript',
    })

    return fs.outputFile(filename, result)
  })
}

main()
