import { Readable } from 'stream'
import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import childProcess from 'child_process'
import { capitalize } from 'lodash'
import prettier from 'prettier'

/* tslint:disable-next-line no-any */
const getType = (data: any, topLevel: string) =>
  new Promise<string>((resolve, reject) => {
    const bin = path.resolve(__dirname, '../node_modules/.bin/quicktype')
    const child = childProcess.spawn(bin, ['--just-types', '--lang', 'ts', '--top-level', topLevel])

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
  const files = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')
  await Promise.map(files, async file => {
    const filename = path.resolve(
      __dirname,
      `../${path.relative(sampleRoot, file).replace('json', 'ts')}`,
    )

    const topLevel = path
      .relative(sampleRoot, file)
      .replace('.json', '')
      .split(/[_\/\\]/)
      .map(capitalize)
      .join('')
    const json = await fs.readJSON(file)
    const raw = await getType(json, topLevel)

    const result = prettier.format(raw, {
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      printWidth: 100,
      parser: 'typescript',
    })

    await fs.outputFile(filename, result)
  })
}

main()
