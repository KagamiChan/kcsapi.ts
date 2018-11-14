/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/kdock
 */
export interface APIGetMemberKdockResponse {
  api_complete_time: number
  api_complete_time_str: string
  api_created_ship_id: number
  api_id: number
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
  api_item5: number
  api_state: number
}
