/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/destroyship
 */
export interface APIReqKousyouDestroyshipRequest {
  api_ship_id: string
  api_slot_dest_flag: string
  api_verno: string
}
