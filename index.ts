import Stream from 'stream'
import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import { json2tsMulti } from 'json-ts'

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, './source/**/*.json'))
  const data = await Promise.map(files, async (file) => {
    const json = await fs.readJSON(file)
    return JSON.stringify(json.body)
  })
  await fs.outputJSON('./start2.json', data)
  await fs.outputFile('./start2.ts', json2tsMulti(data, { rootName: 'start2' }))
}

main()
