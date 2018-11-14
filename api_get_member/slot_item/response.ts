/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/slot_item
 */
export interface APIGetMemberSlotItemResponse {
  api_alv?: number
  api_id: number
  api_level: number
  api_locked: number
  api_slotitem_id: number
}
