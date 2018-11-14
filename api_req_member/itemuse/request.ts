/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/itemuse
 */
export interface APIReqMemberItemuseRequest {
  api_exchange_type: string
  api_force_flag: string
  api_useitem_id: string
  api_verno: string
}
