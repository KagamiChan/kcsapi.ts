/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_map/select_eventmap_rank
 */
export interface APIReqMapSelectEventmapRankRequest {
  api_map_no: string
  api_maparea_id: string
  api_rank: string
  api_verno: string
}
