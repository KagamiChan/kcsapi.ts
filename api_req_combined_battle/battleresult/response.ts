/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_combined_battle/battleresult
 */
export interface APIReqCombinedBattleBattleresultResponse {
  api_dests: number
  api_destsf: number
  api_enemy_info: APIEnemyInfo
  api_escape: APIEscape | null
  api_escape_flag: number
  api_first_clear: number
  api_get_base_exp: number
  api_get_eventflag?: number
  api_get_eventitem?: APIGetEventitem[]
  api_get_exmap_rate: number
  api_get_exmap_useitem_id: number
  api_get_exp: number
  api_get_exp_lvup: number[][]
  api_get_exp_lvup_combined: number[][]
  api_get_flag: number[]
  api_get_ship?: APIGetShip
  api_get_ship_exp: number[]
  api_get_ship_exp_combined: number[]
  api_m1?: number
  api_m_suffix?: string
  api_member_exp: number
  api_member_lv: number
  api_mvp: number
  api_mvp_combined: number
  api_next_map_ids?: string[]
  api_ope_suffix?: string
  api_quest_level: number
  api_quest_name: string
  api_ship_id: number[]
  api_win_rank: string
}

export interface APIEnemyInfo {
  api_deck_name: string
  api_level: string
  api_rank: string
}

export interface APIEscape {
  api_escape_idx: number[]
  api_tow_idx: number[]
}

export interface APIGetEventitem {
  api_id: number
  api_slot_level?: number
  api_type: number
  api_value: number
}

export interface APIGetShip {
  api_ship_getmes: string
  api_ship_id: number
  api_ship_name: string
  api_ship_type: string
}
