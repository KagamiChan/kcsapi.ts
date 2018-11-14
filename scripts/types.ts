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
  body: any // tslint:disable-line no-any
  postBody: any // tslint:disable-line no-any
  time: number
}
