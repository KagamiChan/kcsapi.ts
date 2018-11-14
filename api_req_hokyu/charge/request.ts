/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_hokyu/charge
 */
export interface APIReqHokyuChargeRequest {
  api_id_items: string
  api_kind: string
  api_onslot: string
  api_verno: string
}
