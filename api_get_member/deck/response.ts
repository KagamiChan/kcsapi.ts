/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/deck
 */
export interface APIGetMemberDeckResponse {
  api_flagship: string
  api_id: number
  api_member_id: number
  api_mission: number[]
  api_name: string
  api_name_id: string
  api_ship: number[]
}
