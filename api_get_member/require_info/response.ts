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
  api_unsetslot: { [key: string]: number[] }
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

export interface APIUseitem {
  api_count: number
  api_id: number
}
