/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_battle_midnight/sp_midnight
 */
export interface APIReqBattleMidnightSPMidnightResponse {
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: number[][]
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_flare_pos: number[]
  api_formation: number[]
  api_hougeki: APIHougeki
  api_n_support_flag: number
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_touch_plane: Array<number | string>
}

export interface APIHougeki {
  api_at_eflag: number[]
  api_at_list: number[]
  api_cl_list: number[][]
  api_damage: number[][]
  api_df_list: number[][]
  api_n_mother_list: number[]
  api_si_list: Array<Array<number | string>>
  api_sp_list: number[]
}
