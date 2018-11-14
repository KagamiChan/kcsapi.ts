/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/payitemuse
 */
export interface APIReqMemberPayitemuseRequest {
  api_force_flag: string
  api_payitem_id: string
  api_verno: string
}
