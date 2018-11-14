/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_hensei/change
 */
export interface APIReqHenseiChangeRequest {
  api_id: string
  api_ship_id: string
  api_ship_idx: string
  api_verno: string
}
