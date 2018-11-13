import { Readable } from 'stream'
import glob from 'glob'
import Promise from 'bluebird'
import fs from 'fs-extra'
import path from 'path'
import childProcess from 'child_process'

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, './source/**/*.json'))
  const data = await Promise.map(files, async (file) => {
    const json = await fs.readJSON(file)
    return json.body
  })

  const child = childProcess.spawn('yarn', ['quicktype', '--lang', 'ts', '--top-level', 'start2'])

  let result = ''

  child.stdout.on('data', (chunk) => result+= chunk)

  child.stdout.on('close', () => {
    console.log(result.toString())
  })

  const source = new Readable()
  source._read = () => {}
  source.push(JSON.stringify(data))
  source.push(null)
  source.pipe(child.stdin)
}

main()
