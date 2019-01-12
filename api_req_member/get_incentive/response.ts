/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_member/get_incentive
 */
export interface APIReqMemberGetIncentiveResponse {
  api_count: number
  api_item?: APIItem[]
}

export interface APIItem {
  api_getmes: string
  api_mode: number
  api_mst_id: number
  api_type: number
}
