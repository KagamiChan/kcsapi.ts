/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/ship_deck
 */
export interface APIGetMemberShipDeckResponse {
  api_deck_data: APIDeckData[]
  api_ship_data: APIShipData[]
}

export interface APIDeckData {
  api_flagship: string
  api_id: number
  api_member_id: number
  api_mission: number[]
  api_name: string
  api_name_id: string
  api_ship: number[]
}

export interface APIShipData {
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
  api_sp_effect_items?: APISPEffectItem[]
  api_srate: number
  api_taiku: number[]
  api_taisen: number[]
}

export interface APISPEffectItem {
  api_houg?: number
  api_kaih?: number
  api_kind: number
  api_raig?: number
  api_souk?: number
}
