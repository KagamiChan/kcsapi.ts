/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_air_corps/set_plane
 */
export interface APIReqAirCorpsSetPlaneResponse {
  api_after_bauxite: number
  api_distance: number
  api_plane_info: APIPlaneInfo[]
}

export interface APIPlaneInfo {
  api_cond: number
  api_count: number
  api_max_count: number
  api_slotid: number
  api_squadron_id: number
  api_state: number
}
