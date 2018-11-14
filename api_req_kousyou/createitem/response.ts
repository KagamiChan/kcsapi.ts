/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/createitem
 */
export interface APIReqKousyouCreateitemResponse {
  api_create_flag: number
  api_fdata?: string
  api_material: number[]
  api_shizai_flag: number
  api_slot_item?: APISlotItem
  api_type3?: number
  api_unsetslot?: number[]
}

export interface APISlotItem {
  api_id: number
  api_slotitem_id: number
}
