/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_nyukyo/start
 */
export interface APIReqNyukyoStartRequest {
  api_highspeed: string
  api_ndock_id: string
  api_ship_id: string
  api_verno: string
}
