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
  api_atoll_cell?: number
  api_balloon_cell?: number
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_effect_list?: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: number[][]
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_formation: number[]
  api_hougeki1: APIHougeki | null
  api_hougeki2: APIHougeki | null
  api_hougeki3: null
  api_hourai_flag: number[]
  api_injection_kouku?: APIInjectionKouku
  api_kouku: APIKouku
  api_midnight_flag: number
  api_opening_atack: APIOpeningAtack | null
  api_opening_flag: number
  api_opening_taisen: APIHougeki | null
  api_opening_taisen_flag: number
  api_raigeki: APIRaigeki | null
  api_search: number[]
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_smoke_type?: number
  api_stage_flag: number[]
}

export interface APIHougeki {
  api_at_eflag: number[]
  api_at_list: number[]
  api_at_type: number[]
  api_cl_list: number[][]
  api_damage: number[][]
  api_df_list: number[][]
  api_si_list: (number | string)[][]
}

export interface APIInjectionKouku {
  api_plane_from: (number[] | null)[]
  api_stage1: APIStage
  api_stage2: APIStage
  api_stage3: APIStage3
}

export interface APIStage {
  api_air_fire?: APIAirFire
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
}

export interface APIAirFire {
  api_idx: number
  api_kind: number
  api_use_items: number[]
}

export interface APIStage3 {
  api_e_sp_list?: null[]
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
  api_f_sp_list?: null[]
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
}

export interface APIKouku {
  api_plane_from: (number[] | null)[] | null
  api_stage1: APIStage1 | null
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

export interface APIOpeningAtack {
  api_ecl?: number[]
  api_ecl_list_items?: (number[] | null)[]
  api_edam: number[]
  api_erai?: number[]
  api_erai_list_items?: (number[] | null)[]
  api_eydam?: number[]
  api_eydam_list_items?: (number[] | null)[]
  api_fcl?: number[]
  api_fcl_list_items?: (number[] | null)[]
  api_fdam: number[]
  api_frai?: number[]
  api_frai_list_items?: (number[] | null)[]
  api_fydam?: number[]
  api_fydam_list_items?: (number[] | null)[]
}

export interface APIRaigeki {
  api_ecl: number[]
  api_edam: number[]
  api_erai: number[]
  api_eydam: number[]
  api_fcl: number[]
  api_fdam: number[]
  api_frai: number[]
  api_fydam: number[]
}
