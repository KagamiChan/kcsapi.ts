/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/slotset
 */
export interface APIReqKaisouSlotsetRequest {
  api_id: string
  api_item_id: string
  api_slot_idx: string
  api_verno: string
}
