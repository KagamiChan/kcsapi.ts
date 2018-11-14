/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_map/start
 */
export interface APIReqMapStartRequest {
  api_deck_id: string
  api_maparea_id: string
  api_mapinfo_no: string
  api_serial_cid: string
  api_verno: string
}
