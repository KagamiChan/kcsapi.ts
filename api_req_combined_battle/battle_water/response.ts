/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_combined_battle/battle_water
 */
export interface APIReqCombinedBattleBattleWaterResponse {
  api_air_base_attack?: APIAirBaseAttack[]
  api_atoll_cell?: number
  api_balloon_cell?: number
  api_deck_id: number
  api_eParam: number[][]
  api_eSlot: number[][]
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_escape_idx?: number[]
  api_escape_idx_combined?: number[]
  api_fParam: number[][]
  api_fParam_combined: number[][]
  api_f_maxhps: number[]
  api_f_maxhps_combined: number[]
  api_f_nowhps: number[]
  api_f_nowhps_combined: number[]
  api_formation: number[]
  api_hougeki1?: APIHougeki | null
  api_hougeki2?: APIHougeki | null
  api_hougeki3?: APIHougeki
  api_hourai_flag: number[]
  api_kouku: APIKouku
  api_midnight_flag: number
  api_opening_atack: APIOpeningAtack | null
  api_opening_flag: number
  api_opening_taisen: APIHougeki | null
  api_opening_taisen_flag: number
  api_raigeki?: APIRaigeki
  api_search: number[]
  api_ship_ke: number[]
  api_ship_lv: number[]
  api_smoke_type?: number
  api_stage_flag: number[]
  api_support_flag: number
  api_support_info: APISupportInfo | null
}

export interface APIAirBaseAttack {
  api_base_id: number
  api_plane_from: (number[] | null)[]
  api_squadron_plane: APISquadronPlane[]
  api_stage1: APIStage1
  api_stage2: APIStage
  api_stage3: APIAirBaseAttackAPIStage
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

export interface APIAirBaseAttackAPIStage {
  api_e_sp_list?: null[]
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
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

export interface APIKouku {
  api_plane_from: (number[] | null)[]
  api_stage1: APIStage1
  api_stage2: APIStage | null
  api_stage3: APIKoukuAPIStage | null
  api_stage3_combined: APIStage3Combined | null
}

export interface APIKoukuAPIStage {
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

export interface APIStage3Combined {
  api_f_sp_list?: null[]
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
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

export interface APISupportInfo {
  api_support_airatack: APISupportAiratack | null
  api_support_hourai: APISupportHourai | null
}

export interface APISupportAiratack {
  api_deck_id: number
  api_plane_from: (number[] | null)[]
  api_ship_id: number[]
  api_stage1: APIStage
  api_stage2: APIStage2
  api_stage3: APIAirBaseAttackAPIStage
  api_stage_flag: number[]
  api_undressing_flag: number[]
}

export interface APIStage2 {
  api_f_count: number
  api_f_lostcount: number
}

export interface APISupportHourai {
  api_cl_list: number[]
  api_damage: number[]
  api_deck_id: number
  api_ship_id: number[]
  api_undressing_flag: number[]
}
