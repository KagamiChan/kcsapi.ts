/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_battle_midnight/battle
 */
export interface APIReqBattleMidnightBattleResponse {
  api_atoll_cell?: number
  api_balloon_cell?: number
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_escape_idx?: number[]
  api_fParam: number[][]
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_flare_pos: number[]
  api_formation: number[]
  api_hougeki: APIHougeki
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_smoke_type?: number
  api_touch_plane: (number | string)[]
}

export interface APIHougeki {
  api_at_eflag: number[] | null
  api_at_list: number[] | null
  api_cl_list: number[][] | null
  api_damage: number[][] | null
  api_df_list: number[][] | null
  api_n_mother_list: number[] | null
  api_si_list: (number | string)[][] | null
  api_sp_list: number[] | null
}
