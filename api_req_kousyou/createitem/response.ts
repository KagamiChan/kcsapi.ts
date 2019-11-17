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
  api_get_items: APIGetItem[]
  api_material: number[]
  api_unset_items: APIUnsetItem[] | null
}

export interface APIGetItem {
  api_id: number
  api_slotitem_id: number
}

export interface APIUnsetItem {
  api_slot_list: number[]
  api_type3: number
}
