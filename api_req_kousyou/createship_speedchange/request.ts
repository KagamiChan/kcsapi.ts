/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/createship_speedchange
 */
export interface APIReqKousyouCreateshipSpeedchangeRequest {
  api_highspeed: string
  api_kdock_id: string
  api_verno: string
}
