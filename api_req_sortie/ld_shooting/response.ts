/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_sortie/ld_shooting
 */
export interface APIReqSortieLdShootingResponse {
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: number[][]
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_formation: number[]
  api_hougeki1: APIHougeki1
  api_midnight_flag: number
  api_ship_ke: number[]
  api_ship_lv: number[]
}

export interface APIHougeki1 {
  api_at_eflag: number[]
  api_at_list: number[]
  api_at_type: number[]
  api_cl_list: number[][]
  api_damage: number[][]
  api_df_list: number[][]
  api_si_list: number[][]
}
