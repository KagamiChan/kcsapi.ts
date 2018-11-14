/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_combined_battle/ec_midnight_battle
 */
export interface APIReqCombinedBattleEcMidnightBattleResponse {
  api_active_deck: number[]
  api_deck_id: number
  api_eParam: Array<number[]>
  api_eParam_combined: Array<number[]>
  api_eSlot: Array<number[]>
  api_eSlot_combined: Array<number[]>
  api_e_maxhps: number[]
  api_e_maxhps_combined: number[]
  api_e_nowhps: number[]
  api_e_nowhps_combined: number[]
  api_escape_idx?: number[]
  api_escape_idx_combined?: number[]
  api_fParam: Array<number[]>
  api_fParam_combined: Array<number[]>
  api_f_maxhps: number[]
  api_f_maxhps_combined: number[]
  api_f_nowhps: number[]
  api_f_nowhps_combined: number[]
  api_flare_pos: number[]
  api_formation: number[]
  api_friendly_battle?: APIFriendlyBattle
  api_friendly_info?: APIFriendlyInfo
  api_hougeki: APIReqCombinedBattleEcMidnightBattleResponseAPIHougeki
  api_ship_ke: number[]
  api_ship_ke_combined: number[]
  api_ship_lv: number[]
  api_ship_lv_combined: number[]
  api_touch_plane: Array<number | string>
}

export interface APIFriendlyBattle {
  api_flare_pos: number[]
  api_hougeki: APIFriendlyBattleAPIHougeki
}

export interface APIFriendlyBattleAPIHougeki {
  api_at_eflag: number[]
  api_at_list: number[]
  api_cl_list: Array<number[]>
  api_damage: Array<number[]>
  api_df_list: Array<number[]>
  api_n_mother_list: number[]
  api_si_list: Array<number[]>
  api_sp_list: number[]
}

export interface APIFriendlyInfo {
  api_Param: Array<number[]>
  api_Slot: Array<number[]>
  api_maxhps: number[]
  api_nowhps: number[]
  api_production_type: number
  api_ship_id: number[]
  api_ship_lv: number[]
  api_voice_id: number[]
  api_voice_p_no: number[]
}

export interface APIReqCombinedBattleEcMidnightBattleResponseAPIHougeki {
  api_at_eflag: number[]
  api_at_list: number[]
  api_cl_list: Array<number[]>
  api_damage: Array<number[]>
  api_df_list: Array<number[]>
  api_n_mother_list: number[]
  api_si_list: Array<Array<number | string>>
  api_sp_list: number[]
}
