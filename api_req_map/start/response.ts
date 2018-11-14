/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_map/start
 */
export interface APIReqMapStartResponse {
  api_airsearch: APIAirsearch
  api_bosscell_no: number
  api_bosscomp: number
  api_cell_data: APICellDatum[]
  api_cell_flavor?: APICellFlavor
  api_color_no: number
  api_event_id: number
  api_event_kind: number
  api_eventmap?: APIEventmap
  api_from_no: number
  api_maparea_id: number
  api_mapinfo_no: number
  api_next: number
  api_no: number
  api_rashin_flg: number
  api_rashin_id: number
  api_select_route?: APISelectRoute
}

export interface APIAirsearch {
  api_plane_type: number
  api_result: number
}

export interface APICellDatum {
  api_color_no: number
  api_distance?: number
  api_id: number
  api_no: number
  api_passed: number
}

export interface APICellFlavor {
  api_message: string
  api_type: number
}

export interface APIEventmap {
  api_dmg: number
  api_max_maphp: number
  api_now_maphp: number
}

export interface APISelectRoute {
  api_select_cells: number[]
}
