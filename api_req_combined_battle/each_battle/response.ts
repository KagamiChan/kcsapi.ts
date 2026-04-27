/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_combined_battle/each_battle
 */
export interface APIReqCombinedBattleEachBattleResponse {
  api_air_base_attack: APIAirBaseAttack[]
  api_air_base_injection?: APIAirBaseInjection
  api_deck_id: number
  api_eParam: number[][]
  api_eParam_combined: number[][]
  api_eSlot: number[][]
  api_eSlot_combined: number[][]
  api_e_maxhps: number[]
  api_e_maxhps_combined: number[]
  api_e_nowhps: number[]
  api_e_nowhps_combined: number[]
  api_escape_idx?: number[]
  api_escape_idx_combined?: number[]
  api_fParam: number[][]
  api_fParam_combined: number[][]
  api_f_maxhps: number[]
  api_f_maxhps_combined: number[]
  api_f_nowhps: number[]
  api_f_nowhps_combined: number[]
  api_flavor_info: APIFlavorInfo[]
  api_formation: number[]
  api_hougeki1: APIHougeki
  api_hougeki2?: APIHougeki
  api_hougeki3: APIHougeki
  api_hourai_flag: number[]
  api_injection_kouku?: APIInjectionKouku
  api_kouku: APIKouku
  api_midnight_flag: number
  api_opening_atack: APIRaigekiClass | null
  api_opening_flag: number
  api_opening_taisen: null
  api_opening_taisen_flag: number
  api_raigeki: APIRaigekiClass
  api_search: number[]
  api_ship_ke: number[]
  api_ship_ke_combined: number[]
  api_ship_lv: number[]
  api_ship_lv_combined: number[]
  api_stage_flag: number[]
  api_support_flag: number
  api_support_info: APISupportInfo | null
  api_xal01?: number
}

export interface APIAirBaseAttack {
  api_base_id: number
  api_plane_from: Array<number[] | null>
  api_squadron_plane: APIAirBaseDatumElement[]
  api_stage1: APIStage1
  api_stage2: APIStage | null
  api_stage3: APIAirBaseAttackAPIStage3 | null
  api_stage3_combined: APIAirBaseAttackAPIStage3 | null
  api_stage_flag: number[]
}

export interface APIAirBaseDatumElement {
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

export interface APIAirBaseAttackAPIStage3 {
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
}

export interface APIAirBaseInjection {
  api_air_base_data: APIAirBaseDatumElement[]
  api_plane_from: null[]
  api_stage1: APIStage
  api_stage2: APIStage
  api_stage3: APIAirBaseAttackAPIStage3
  api_stage3_combined: APIAirBaseAttackAPIStage3
}

export interface APIFlavorInfo {
  api_boss_ship_id: string
  api_class_name: string
  api_data: string
  api_message: string
  api_pos_x: string
  api_pos_y: string
  api_ship_name: string
  api_type: string
  api_voice_id: string
}

export interface APIHougeki {
  api_at_eflag: number[]
  api_at_list: number[]
  api_at_type: number[]
  api_cl_list: number[][]
  api_damage: number[][]
  api_df_list: number[][]
  api_si_list: Array<Array<number | string>>
}

export interface APIInjectionKouku {
  api_plane_from: Array<number[] | null>
  api_stage1: APIStage
  api_stage2: APIStage
  api_stage3: APIInjectionKoukuAPIStage3
  api_stage3_combined: APIInjectionKoukuAPIStage3
}

export interface APIInjectionKoukuAPIStage3 {
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
  api_stage2: APIStage
  api_stage3: APIInjectionKoukuAPIStage3
  api_stage3_combined: APIInjectionKoukuAPIStage3
}

export interface APIRaigekiClass {
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
  api_support_airatack: null
  api_support_hourai: APISupportHourai
}

export interface APISupportHourai {
  api_cl_list: number[]
  api_damage: number[]
  api_deck_id: number
  api_ship_id: number[]
  api_undressing_flag: number[]
}
