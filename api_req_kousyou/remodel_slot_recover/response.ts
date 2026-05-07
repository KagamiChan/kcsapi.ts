/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/remodel_slot_recover
 */
export interface APIReqKousyouRemodelSlotRecoverResponse {
  api_after_slot: APIAfterSlot
  api_recover_flag: number
}

export interface APIAfterSlot {
  api_id: number
  api_level: number
  api_locked: number
  api_slotitem_id: number
}
