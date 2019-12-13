/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/createship
 */
export interface APIReqKousyouCreateshipRequest {
  api_highspeed: string
  api_item1: string
  api_item2: string
  api_item3: string
  api_item4: string
  api_item5: string
  api_kdock_id: string
  api_large_flag: string
  api_verno: string
}
