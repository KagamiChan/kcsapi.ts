/**
 * This script is to process and move json files into samples folder
 * All json files are put into staging folder at first
 * They are saved to correct path in samples folder after being anonymized
 */

import fs from 'fs-extra'
import glob from 'glob'
import path from 'path'
import Promise from 'bluebird'
import { cloneDeep, set, map, get, mapValues, isArray, isObject, isString } from 'lodash'
import faker from 'faker'

import { PoiPacket } from './types'

/**
 * recusively replaces api_member_id in given data
 * @param data any
 * @param key used for mapValues method in recursion
 */
/* tslint:disable-next-line no-any */
const replaceMemberId = (data: any, key?: string): any => {
  if (key === 'api_member_id') {
    return isString(data) ? String(faker.random.number()) : faker.random.number()
  }
  if (isArray(data)) {
    return map(data, replaceMemberId)
  }
  if (isObject(data)) {
    return mapValues(data, replaceMemberId)
  }
  return data
}

/* tslint:disable-next-line no-any */
const replaceApiId = (data: {}): {} => ({
  ...data,
  api_id: isString(data) ? String(faker.random.number()) : faker.random.number(),
})

const anonymize = (data: PoiPacket): PoiPacket => {
  let packet = cloneDeep(data)

  packet = replaceMemberId(packet)

  switch (packet.path) {
    case '/kcsapi/api_get_member/require_info':
      set(
        packet,
        ['body', 'api_slot_item'],
        map(packet.body.api_slot_item, item => replaceApiId(item)),
      )
      break
    case '/kcsapi/api_port/port':
      set(packet, ['postBody', 'api_port'], String(faker.random.number()))
      set(packet, ['body', 'api_ship'], map(packet.body.api_ship, s => replaceApiId(s)))
      set(packet, ['body', 'api_basic', 'api_nickname'], faker.random.word())
      set(packet, ['body', 'api_basic', 'api_nickname_id'], String(faker.random.number()))
      set(packet, ['body', 'api_basic', 'api_comment'], faker.random.word())
      set(packet, ['body', 'api_basic', 'api_comment_id'], String(faker.random.number()))
    default:
  }

  return packet
}

/**
 * builds path to save in samples folder
 * @param data poi packet
 * @returns [requestPath, responsePath]
 */
const buildPath = (data: PoiPacket): string[] => [
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'request.json'),
  path.resolve(__dirname, '../samples', data.path.replace('/kcsapi/', ''), 'response.json'),
]

const main = async () => {
  const files = glob.sync(path.resolve(__dirname, '../staging/**/*.json'))

  await Promise.map(files, async file => {
    const packet: PoiPacket = await fs.readJSON(file)

    const data = anonymize(packet)

    const [requestPath, responsePath] = buildPath(data)

    return Promise.all([
      fs.outputJSON(requestPath, data.postBody, { spaces: 2 }),
      fs.outputJSON(responsePath, data.body, { spaces: 2 }),
    ])
  })
}

main()
