/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/createitem
 */
export interface APIReqKousyouCreateitemRequest {
  api_item1: string
  api_item2: string
  api_item3: string
  api_item4: string
  api_multiple_flag?: string
  api_verno: string
}
