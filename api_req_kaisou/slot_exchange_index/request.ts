/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/slot_exchange_index
 */
export interface APIReqKaisouSlotExchangeIndexRequest {
  api_dst_idx: string
  api_id: string
  api_src_idx: string
  api_verno: string
}
