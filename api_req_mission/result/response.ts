/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_mission/result
 */
export interface APIReqMissionResultResponse {
  api_clear_result: number
  api_detail: string
  api_get_exp: number
  api_get_exp_lvup: number[][]
  api_get_item1?: APIGetItem
  api_get_item2?: APIGetItem
  api_get_material: number[] | number
  api_get_ship_exp: number[]
  api_maparea_name: string
  api_member_exp: number
  api_member_lv: number
  api_quest_level: number
  api_quest_name: string
  api_ship_id: number[]
  api_useitem_flag: number[]
}

export interface APIGetItem {
  api_useitem_count: number
  api_useitem_id: number
  api_useitem_name: null | string
}
