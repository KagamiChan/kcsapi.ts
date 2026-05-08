/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/ship3
 */
export interface APIGetMemberShip3Response {
  api_deck_data: APIDeckData[]
  api_ship_data: APIShipData[]
  api_slot_data: APISlotData
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

export interface APISlotData {
  api_slottype1: number[]
  api_slottype10: number[]
  api_slottype11: number[]
  api_slottype12: number[]
  api_slottype13: number[]
  api_slottype14: number[]
  api_slottype15: number[]
  api_slottype17: number[]
  api_slottype18: number[]
  api_slottype19: number[]
  api_slottype2: number[]
  api_slottype21: number[]
  api_slottype22: number[]
  api_slottype23: number[]
  api_slottype24: number[]
  api_slottype25: number[]
  api_slottype26: number[]
  api_slottype27: number[]
  api_slottype28: number[]
  api_slottype29?: number[]
  api_slottype3: number[]
  api_slottype30: number[]
  api_slottype31: number[]
  api_slottype32: number[]
  api_slottype33: number[]
  api_slottype34: number[]
  api_slottype35: number[]
  api_slottype36?: number[]
  api_slottype37: number[]
  api_slottype38?: number[]
  api_slottype39: number[]
  api_slottype4: number[]
  api_slottype41: number[]
  api_slottype42?: number[]
  api_slottype43: number[]
  api_slottype44: number[]
  api_slottype45: number[]
  api_slottype46: number[]
  api_slottype47: number[]
  api_slottype48: number[]
  api_slottype49?: number[]
  api_slottype5: number[]
  api_slottype51?: number[]
  api_slottype52?: number[]
  api_slottype53?: number[]
  api_slottype54?: number[]
  api_slottype57?: number[]
  api_slottype6: number[]
  api_slottype7: number[]
  api_slottype8: number[]
  api_slottype9: number[]
  api_slottype91?: number[]
  api_slottype93?: number[]
  api_slottype94?: number[]
  api_slottype95?: number[]
}
