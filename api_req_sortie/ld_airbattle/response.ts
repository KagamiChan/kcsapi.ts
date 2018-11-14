/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_sortie/ld_airbattle
 */
export interface APIReqSortieLdAirbattleResponse {
  api_deck_id: number
  api_eParam: Array<number[]>
  api_eSlot: Array<number[]>
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: Array<number[]>
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_formation: number[]
  api_kouku: APIKouku
  api_midnight_flag: number
  api_search: number[]
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_stage_flag: number[]
}

export interface APIKouku {
  api_plane_from: Array<number[]>
  api_stage1: APIStage1
  api_stage2: APIStage2
  api_stage3: APIStage3
}

export interface APIStage1 {
  api_disp_seiku: number
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
  api_touch_plane: number[]
}

export interface APIStage2 {
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
}

export interface APIStage3 {
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
}
