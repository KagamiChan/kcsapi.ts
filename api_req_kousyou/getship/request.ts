/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/getship
 */
export interface APIReqKousyouGetshipRequest {
  api_kdock_id: string
  api_verno: string
}
