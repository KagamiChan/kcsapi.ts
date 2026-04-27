/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/updatedeckname
 */
export interface APIReqMemberUpdatedecknameRequest {
  api_deck_id: string
  api_name: string
  api_name_id: string
  api_verno: string
}
