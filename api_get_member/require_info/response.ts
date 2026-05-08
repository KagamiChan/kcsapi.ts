/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/require_info
 */
export interface APIGetMemberRequireInfoResponse {
  api_basic: APIBasic
  api_extra_supply: number[]
  api_furniture: APIFurniture[]
  api_kdock: APIKdock[]
  api_oss_setting: APIOSSSetting
  api_position_id?: number
  api_skin_id: number
  api_slot_item: APISlotItem[]
  api_unsetslot: APIUnsetslot
  api_useitem: APIUseitem[]
}

export interface APIBasic {
  api_firstflag: number
  api_member_id: number
}

export interface APIFurniture {
  api_furniture_id: number
  api_furniture_no: number
  api_furniture_type: number
  api_id: number
}

export interface APIKdock {
  api_complete_time: number
  api_complete_time_str: string
  api_created_ship_id: number
  api_id: number
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
  api_item5: number
  api_state: number
}

export interface APIOSSSetting {
  api_language_type: number
  api_oss_items: number[]
}

export interface APISlotItem {
  api_alv?: number
  api_id: number
  api_level: number
  api_locked: number
  api_slotitem_id: number
}

export interface APIUnsetslot {
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
  api_slottype23?: number[]
  api_slottype24: number[]
  api_slottype25?: number[]
  api_slottype26: number[]
  api_slottype27: number[]
  api_slottype28: number[]
  api_slottype29: number[]
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
  api_slottype39?: number[]
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
  api_slottype93: number[]
  api_slottype94?: number[]
  api_slottype95?: number[]
}

export interface APIUseitem {
  api_count: number
  api_id: number
}
