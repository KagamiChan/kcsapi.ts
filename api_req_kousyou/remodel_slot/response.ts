/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/remodel_slot
 */
export interface APIReqKousyouRemodelSlotResponse {
  api_after_material: number[]
  api_after_slot?: APIAfterSlot
  api_remodel_flag: number
  api_remodel_id: number[]
  api_use_slot_id?: number[]
  api_voice_id: number
  api_voice_ship_id: number
}

export interface APIAfterSlot {
  api_id: number
  api_level: number
  api_locked: number
  api_slotitem_id: number
}
