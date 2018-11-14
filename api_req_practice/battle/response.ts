/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_practice/battle
 */
export interface APIReqPracticeBattleResponse {
  api_deck_id: number
  api_eParam: Array<number[]>
  api_eSlot: Array<number[]>
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: Array<number[]>
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_formation: number[]
  api_hougeki1: APIHougeki1Class | null
  api_hougeki2: APIHougeki1Class | null
  api_hougeki3: null
  api_hourai_flag: number[]
  api_injection_kouku?: APIInjectionKouku
  api_kouku: APIKouku
  api_midnight_flag: number
  api_opening_atack: APIOpeningAtackClass | null
  api_opening_flag: number
  api_opening_taisen: APIHougeki1Class | null
  api_opening_taisen_flag: number
  api_raigeki: APIOpeningAtackClass | null
  api_search: number[]
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_stage_flag: number[]
}

export interface APIHougeki1Class {
  api_at_eflag: number[]
  api_at_list: number[]
  api_at_type: number[]
  api_cl_list: Array<number[]>
  api_damage: Array<number[]>
  api_df_list: Array<number[]>
  api_si_list: Array<Array<number | string>>
}

export interface APIInjectionKouku {
  api_plane_from: Array<number[] | null>
  api_stage1: APIStage
  api_stage2: APIStage
  api_stage3: APIStage3
}

export interface APIStage {
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

export interface APIKouku {
  api_plane_from: Array<number[] | null>
  api_stage1: APIStage1
  api_stage2: APIStage | null
  api_stage3: APIStage3 | null
}

export interface APIStage1 {
  api_disp_seiku: number
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
  api_touch_plane: number[]
}

export interface APIOpeningAtackClass {
  api_ecl: number[]
  api_edam: number[]
  api_erai: number[]
  api_eydam: number[]
  api_fcl: number[]
  api_fdam: number[]
  api_frai: number[]
  api_fydam: number[]
}
