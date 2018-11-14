/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/payitem
 */
export interface APIGetMemberPayitemResponseSuccess {
  api_count: number
  api_description: string
  api_name: string
  api_payitem_id: string
  api_price: number
  api_type: number
}

export interface APIGetMemberPayitemResponseFail {
  api_data: null
  api_result: number
  api_result_msg: string
}
