/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/itemuse_cond
 */
export interface APIReqMemberItemuseCondRequest {
  api_deck_id: string
  api_use_type: string
  api_verno: string
}
