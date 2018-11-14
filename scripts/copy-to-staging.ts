import glob from 'glob'
import fs from 'fs-extra'
import Promise from 'bluebird'
import { get } from 'lodash'
import path from 'path'

const limit = +new Date('2018.9.1')

const main = async () => {
  // FIXME: use given path
  const files = glob.sync(
    '/Users/kagami/Library/Application Support/poi/response-saver/kcsapi/**/*.json',
  )

  console.info(files.length)

  await Promise.map(files, async file => {
    const matched = get(file.match(/.*\/(.*)\.json$/), 1)
    if (!matched) {
      return
    }
    if (+matched > limit) {
      console.info(file)
      return fs.copy(file, path.resolve(__dirname, '../staging', path.basename(file)))
    }
  })
}

main()
