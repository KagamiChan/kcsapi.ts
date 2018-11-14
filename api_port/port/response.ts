/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

export interface APIPortPortResponse {
  api_material: APIMaterial[]
  api_deck_port: APIDeckPort[]
  api_ndock: APINdock[]
  api_ship: APIShip[]
  api_basic: APIBasic
  api_log: APILog[]
  api_p_bgm_id: number
  api_parallel_quest_count: number
  api_dest_ship_slot: number
}

export interface APIBasic {
  api_member_id: string
  api_nickname: string
  api_nickname_id: string
  api_active_flag: number
  api_starttime: number
  api_level: number
  api_rank: number
  api_experience: number
  api_fleetname: null
  api_comment: string
  api_comment_id: string
  api_max_chara: number
  api_max_slotitem: number
  api_max_kagu: number
  api_playtime: number
  api_tutorial: number
  api_furniture: number[]
  api_count_deck: number
  api_count_kdock: number
  api_count_ndock: number
  api_fcoin: number
  api_st_win: number
  api_st_lose: number
  api_ms_count: number
  api_ms_success: number
  api_pt_win: number
  api_pt_lose: number
  api_pt_challenged: number
  api_pt_challenged_win: number
  api_firstflag: number
  api_tutorial_progress: number
  api_pvp: number[]
  api_medals: number
  api_large_dock: number
}

export interface APIDeckPort {
  api_member_id: number
  api_id: number
  api_name: string
  api_name_id: string
  api_mission: number[]
  api_flagship: string
  api_ship: number[]
}

export interface APILog {
  api_no: number
  api_type: string
  api_state: string
  api_message: string
}

export interface APIMaterial {
  api_member_id: number
  api_id: number
  api_value: number
}

export interface APINdock {
  api_member_id: number
  api_id: number
  api_state: number
  api_ship_id: number
  api_complete_time: number
  api_complete_time_str: string
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
}

export interface APIShip {
  api_id: number
  api_sortno: number
  api_ship_id: number
  api_lv: number
  api_exp: number[]
  api_nowhp: number
  api_maxhp: number
  api_soku: number
  api_leng: number
  api_slot: number[]
  api_onslot: number[]
  api_slot_ex: number
  api_kyouka: number[]
  api_backs: number
  api_fuel: number
  api_bull: number
  api_slotnum: number
  api_ndock_time: number
  api_ndock_item: number[]
  api_srate: number
  api_cond: number
  api_karyoku: number[]
  api_raisou: number[]
  api_taiku: number[]
  api_soukou: number[]
  api_kaihi: number[]
  api_taisen: number[]
  api_sakuteki: number[]
  api_lucky: number[]
  api_locked: number
  api_locked_equip: number
}
