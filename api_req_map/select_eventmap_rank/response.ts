/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_map/select_eventmap_rank
 */
export interface APIReqMapSelectEventmapRankResponse {
  api_maphp: APIMaphp
}

export interface APIMaphp {
  api_gauge_num: number
  api_gauge_type: number | string
  api_max_maphp: number
  api_now_maphp: number
}
