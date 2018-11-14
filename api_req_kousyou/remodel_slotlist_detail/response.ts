/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/remodel_slotlist_detail
 */
export interface APIReqKousyouRemodelSlotlistDetailResponse {
  api_certain_buildkit: number
  api_certain_remodelkit: number
  api_change_flag: number
  api_req_buildkit: number
  api_req_remodelkit: number
  api_req_slot_id: number
  api_req_slot_num: number
}
