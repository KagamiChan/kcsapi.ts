/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/mapinfo
 */
export interface APIGetMemberMapinfoResponse {
  api_air_base: APIAirBase[]
  api_map_info: APIMapInfo[]
}

export interface APIAirBase {
  api_action_kind: number
  api_area_id: number
  api_distance: number
  api_name: string
  api_plane_info: APIPlaneInfo[]
  api_rid: number
}

export interface APIPlaneInfo {
  api_cond?: number
  api_count?: number
  api_max_count?: number
  api_slotid: number
  api_squadron_id: number
  api_state: number
}

export interface APIMapInfo {
  api_air_base_decks?: number
  api_cleared: number
  api_defeat_count?: number
  api_eventmap?: APIEventmap
  api_exboss_flag: number
  api_id: number
}

export interface APIEventmap {
  api_gauge_num: number
  api_gauge_type: number
  api_max_maphp: number
  api_now_maphp: number
  api_selected_rank: number
  api_state: number
}
