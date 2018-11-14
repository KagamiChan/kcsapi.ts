/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_member/payitemuse
 */
export interface APIReqMemberPayitemuseResponse {
  api_caution_flag: number
  api_flag?: number
  api_max_chara?: number
  api_max_slotitem?: number
}
