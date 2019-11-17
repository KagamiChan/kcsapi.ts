/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_port/port
 */
export interface APIPortPortResponse {
  api_basic: APIBasic
  api_c_flag?: number
  api_combined_flag?: number
  api_deck_port: APIDeckPort[]
  api_dest_ship_slot: number
  api_event_object?: APIEventObject
  api_log: APILog[]
  api_material: APIMaterial[]
  api_ndock: APINdock[]
  api_p_bgm_id: number
  api_parallel_quest_count: number
  api_plane_info?: APIPlaneInfo
  api_ship: APIShip[]
}

export interface APIBasic {
  api_active_flag: number
  api_comment: string
  api_comment_id: string
  api_count_deck: number
  api_count_kdock: number
  api_count_ndock: number
  api_experience: number
  api_fcoin: number
  api_firstflag: number
  api_fleetname: null
  api_furniture: number[]
  api_large_dock: number
  api_level: number
  api_max_chara: number
  api_max_kagu: number
  api_max_slotitem: number
  api_medals: number
  api_member_id: string
  api_ms_count: number
  api_ms_success: number
  api_nickname: string
  api_nickname_id: string
  api_playtime: number
  api_pt_challenged: number
  api_pt_challenged_win: number
  api_pt_lose: number
  api_pt_win: number
  api_pvp: number[]
  api_rank: number
  api_st_lose: number
  api_st_win: number
  api_starttime: number
  api_tutorial: number
  api_tutorial_progress: number
}

export interface APIDeckPort {
  api_flagship: string
  api_id: number
  api_member_id: number
  api_mission: number[]
  api_name: string
  api_name_id: string
  api_ship: number[]
}

export interface APIEventObject {
  api_m_flag: number
  api_m_flag2?: number
}

export interface APILog {
  api_message: string
  api_no: number
  api_state: string
  api_type: string
}

export interface APIMaterial {
  api_id: number
  api_member_id: number
  api_value: number
}

export interface APINdock {
  api_complete_time: number
  api_complete_time_str: string
  api_id: number
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
  api_member_id: number
  api_ship_id: number
  api_state: number
}

export interface APIPlaneInfo {
  api_base_convert_slot?: number[]
  api_unset_slot?: APIUnsetSlot[]
}

export interface APIUnsetSlot {
  api_slot_list: number[]
  api_type3No: number
}

export interface APIShip {
  api_backs: number
  api_bull: number
  api_cond: number
  api_exp: number[]
  api_fuel: number
  api_id: number
  api_kaihi: number[]
  api_karyoku: number[]
  api_kyouka: number[]
  api_leng: number
  api_locked: number
  api_locked_equip: number
  api_lucky: number[]
  api_lv: number
  api_maxhp: number
  api_ndock_item: number[]
  api_ndock_time: number
  api_nowhp: number
  api_onslot: number[]
  api_raisou: number[]
  api_sakuteki: number[]
  api_sally_area?: number
  api_ship_id: number
  api_slot: number[]
  api_slot_ex: number
  api_slotnum: number
  api_soku: number
  api_sortno: number
  api_soukou: number[]
  api_srate: number
  api_taiku: number[]
  api_taisen: number[]
}
