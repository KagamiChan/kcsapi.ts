/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/remodel_slotlist
 */
export interface APIReqKousyouRemodelSlotlistResponse {
  api_id: number
  api_req_bauxite: number
  api_req_buildkit: number
  api_req_bull: number
  api_req_fuel: number
  api_req_remodelkit: number
  api_req_slot_id?: number
  api_req_slot_num?: number
  api_req_steel: number
  api_slot_id: number
  api_sp_type?: number
}
