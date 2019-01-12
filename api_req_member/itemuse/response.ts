/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_member/itemuse
 */
export interface APIReqMemberItemuseResponse {
  api_caution_flag: number
  api_flag: number
  api_getitem: Array<APIGetitem | null>
  api_material?: number[]
}

export interface APIGetitem {
  api_getcount: number
  api_mst_id: number
  api_slotitem?: APISlotitem
  api_usemst: number
}

export interface APISlotitem {
  api_id: number
  api_level: number
  api_locked: number
  api_slotitem_id: number
}
