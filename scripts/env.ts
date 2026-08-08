/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * Reads the packet source folder and the start date from the `.env` file,
 * see `.env.example`
 */

import fs from 'fs-extra'
import path from 'path'
import dotenv from 'dotenv'

const ENV_PATH = path.resolve(__dirname, '../.env')
export const LIMIT_KEY = 'KCSAPI_LIMIT'
const SOURCE_KEY = 'KCSAPI_SOURCE_PATH'

dotenv.config({ path: ENV_PATH })

export const getSource = (): string => {
  const source = process.env[SOURCE_KEY]
  if (!source) {
    throw new Error(`${SOURCE_KEY} is not set, see .env.example`)
  }
  return source
}

export const getLimit = (): number => {
  const raw = process.env[LIMIT_KEY]
  if (!raw) {
    console.warn(`${LIMIT_KEY} is not set, processing all packets`)
    return 0
  }
  const limit = +new Date(raw)
  if (Number.isNaN(limit)) {
    throw new Error(`${LIMIT_KEY} is not a valid date: ${raw}`)
  }
  return limit
}

/**
 * writes the given date back to the `KCSAPI_LIMIT` entry of the .env file,
 * so that the next run only picks up packets saved afterwards
 */
export const updateLimit = async (limit: Date): Promise<void> => {
  const entry = `${LIMIT_KEY}=${limit.toISOString()}`
  const content = (await fs.pathExists(ENV_PATH)) ? await fs.readFile(ENV_PATH, 'utf8') : ''
  const pattern = new RegExp(`^\\s*${LIMIT_KEY}\\s*=.*$`, 'm')

  const next = pattern.test(content)
    ? content.replace(pattern, entry)
    : `${content.replace(/\n*$/, '')}\n${entry}\n`.replace(/^\n/, '')

  await fs.writeFile(ENV_PATH, next)
  console.info(`${LIMIT_KEY} updated to ${limit.toISOString()}`)
}
