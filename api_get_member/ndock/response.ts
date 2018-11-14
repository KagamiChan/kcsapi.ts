/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/ndock
 */
export interface APIGetMemberNdockResponse {
  api_complete_time: number
  api_complete_time_str: string
  api_id: number
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
  api_member_id: number
  api_ship_id: number
  api_state: number
}
