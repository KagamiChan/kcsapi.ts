/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_air_corps/change_deployment_base
 */
export interface APIReqAirCorpsChangeDeploymentBaseResponse {
  api_base_items: APIBaseItem[]
}

export interface APIBaseItem {
  api_distance: APIDistance
  api_plane_info: APIPlaneInfo[]
  api_rid: number
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
