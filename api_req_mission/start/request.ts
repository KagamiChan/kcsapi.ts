/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_mission/start
 */
export interface APIReqMissionStartRequest {
  api_deck_id: string
  api_mission: string
  api_mission_id: string
  api_serial_cid: string
  api_verno: string
}
