/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_air_corps/cond_recovery
 */
export interface APIReqAirCorpsCondRecoveryResponse {
  api_distance: APIDistance
  api_plane_info: APIPlaneInfo[]
}

export interface APIDistance {
  api_base: number
  api_bonus: number
}

export interface APIPlaneInfo {
  api_cond: number
  api_count: number
  api_max_count: number
  api_slotid: number
  api_squadron_id: number
  api_state: number
}
