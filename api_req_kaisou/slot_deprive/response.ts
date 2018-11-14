/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kaisou/slot_deprive
 */
export interface APIReqKaisouSlotDepriveResponse {
  api_ship_data: APIShipData
  api_unset_list?: APIUnsetList
}

export interface APIShipData {
  api_set_ship: APISetShip
  api_unset_ship: APISetShip
}

export interface APISetShip {
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

export interface APIUnsetList {
  api_slot_list: number[]
  api_type3No: number
}
