/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * poi data packet format
 */
export interface PoiPacket {
  method: string
  path: string
  body: any // eslint-disable-line @typescript-eslint/no-explicit-any
  postBody: any // eslint-disable-line @typescript-eslint/no-explicit-any
  time: number
}
