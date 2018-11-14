/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_combined_battle/ld_airbattle
 */
export interface APIReqCombinedBattleLdAirbattleResponse {
  api_air_base_attack?: APIAirBaseAttack[]
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_fParam: number[][]
  api_fParam_combined: number[][]
  api_f_maxhps: number[]
  api_f_maxhps_combined: number[]
  api_f_nowhps: number[]
  api_f_nowhps_combined: number[]
  api_formation: number[]
  api_kouku: APIKouku
  api_midnight_flag: number
  api_search: number[]
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_stage_flag: number[]
}

export interface APIAirBaseAttack {
  api_base_id: number
  api_plane_from: Array<number[] | null>
  api_squadron_plane: APISquadronPlane[]
  api_stage1: APIStage1
  api_stage2: null
  api_stage3: null
  api_stage_flag: number[]
}

export interface APISquadronPlane {
  api_count: number
  api_mst_id: number
}

export interface APIStage1 {
  api_disp_seiku: number
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
  api_touch_plane: number[]
}

export interface APIKouku {
  api_plane_from: number[][]
  api_stage1: APIStage1
  api_stage2: APIStage2
  api_stage3: APIStage3
  api_stage3_combined: APIStage3Combined
}

export interface APIStage2 {
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
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
}

export interface APIStage3Combined {
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
}
