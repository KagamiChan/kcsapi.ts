/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/mission
 */
export interface API {
  api_mission_id: number
  api_state: number
}

export interface APIGetMemberMissionResponse {
  api_limit_time: number[]
  api_list_items: API[]
}
