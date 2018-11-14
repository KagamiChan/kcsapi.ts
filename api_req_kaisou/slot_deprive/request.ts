/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/slot_deprive
 */
export interface APIReqKaisouSlotDepriveRequest {
  api_set_idx: string
  api_set_ship: string
  api_set_slot_kind: string
  api_unset_idx: string
  api_unset_ship: string
  api_unset_slot_kind: string
  api_verno: string
}
