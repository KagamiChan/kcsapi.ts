/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/mission
 */
export interface APIGetMemberMissionResponse {
  api_mission_id: number
  api_state: number
}
