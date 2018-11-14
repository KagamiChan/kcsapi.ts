/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

export interface APIGetMemberRequireInfoResponse {
  api_basic: APIBasic
  api_slot_item: APISlotItem[]
  api_unsetslot: { [key: string]: number[] }
  api_kdock: APIKdock[]
  api_useitem: APIUseitem[]
  api_furniture: APIFurniture[]
  api_extra_supply: number[]
  api_oss_setting: APIOSSSetting
  api_skin_id: number
}

export interface APIBasic {
  api_member_id: number
  api_firstflag: number
}

export interface APIFurniture {
  api_id: number
  api_furniture_type: number
  api_furniture_no: number
  api_furniture_id: number
}

export interface APIKdock {
  api_id: number
  api_state: number
  api_created_ship_id: number
  api_complete_time: number
  api_complete_time_str: string
  api_item1: number
  api_item2: number
  api_item3: number
  api_item4: number
  api_item5: number
}

export interface APIOSSSetting {
  api_language_type: number
  api_oss_items: number[]
}

export interface APISlotItem {
  api_id: number
  api_slotitem_id: number
  api_locked: number
  api_level: number
  api_alv?: number
}

export interface APIUseitem {
  api_id: number
  api_count: number
}
