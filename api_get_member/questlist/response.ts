/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/questlist
 */
export interface APIGetMemberQuestlistResponse {
  api_c_list?: APICList[]
  api_completed_kind: number
  api_count: number
  api_disp_page: number
  api_exec_count: number
  api_exec_type: number
  api_list: Array<APIListClass | number>
  api_page_count: number
}

export interface APICList {
  api_no: number
  api_progress_flag: number
  api_state: number
}

export interface APIListClass {
  api_bonus_flag: number
  api_category: number
  api_detail: string
  api_get_material: number[]
  api_invalid_flag: number
  api_lost_badges?: number
  api_no: number
  api_progress_flag: number
  api_select_rewards?: APISelectReward[][]
  api_state: number
  api_title: string
  api_type: number
  api_voice_id: number
}

export interface APISelectReward {
  api_count: number
  api_kind: number
  api_mst_id: number
  api_no: number
}
