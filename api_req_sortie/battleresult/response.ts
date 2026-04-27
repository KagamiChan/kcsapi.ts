/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_sortie/battleresult
 */
export interface APIReqSortieBattleresultResponse {
  api_dests: number
  api_destsf: number
  api_enemy_info: APIEnemyInfo
  api_escape: null
  api_escape_flag: number
  api_first_clear: number
  api_get_base_exp: number
  api_get_eventflag?: number
  api_get_eventitem?: APIGetEventitem[]
  api_get_exmap_rate: number | string
  api_get_exmap_useitem_id: number | string
  api_get_exp: number
  api_get_exp_lvup: number[][]
  api_get_flag: number[]
  api_get_ship?: APIGetShip
  api_get_ship_exp: number[]
  api_get_useitem?: APIGetUseitem
  api_landing_hp?: APILandingHP
  api_m1?: number
  api_m_suffix?: string
  api_mapcell_incentive: number
  api_member_exp: number
  api_member_lv: number
  api_mvp: number
  api_next_map_ids?: Array<number | string>
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

export interface APIGetEventitem {
  api_id: number
  api_type: number
  api_value: number
}

export interface APIGetShip {
  api_ship_getmes: string
  api_ship_id: number
  api_ship_name: string
  api_ship_type: string
}

export interface APIGetUseitem {
  api_useitem_id: number
  api_useitem_name: string
}

export interface APILandingHP {
  api_max_hp: string
  api_now_hp: string
  api_sub_value: number | string
}
