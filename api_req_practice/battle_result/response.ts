/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_practice/battle_result
 */
export interface APIReqPracticeBattleResultResponse {
  api_enemy_info: APIEnemyInfo
  api_get_base_exp: number
  api_get_exp: number
  api_get_exp_lvup: number[][]
  api_get_ship_exp: number[]
  api_member_exp: number
  api_member_lv: number
  api_mvp: number
  api_ship_id: number[]
  api_win_rank: string
}

export interface APIEnemyInfo {
  api_deck_name: string
  api_level: number
  api_rank: string
  api_user_name: string
}
