/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/hangar_expand
 */
export interface APIReqKaisouHangarExpandRequest {
  api_ship_id: string
  api_slot_pos: string
  api_verno: string
}
