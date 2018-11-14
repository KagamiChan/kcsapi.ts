/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/remodel_slot
 */
export interface APIReqKousyouRemodelSlotRequest {
  api_certain_flag: string
  api_id: string
  api_slot_id: string
  api_verno: string
}
