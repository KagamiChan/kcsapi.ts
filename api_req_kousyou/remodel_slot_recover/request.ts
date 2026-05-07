/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kousyou/remodel_slot_recover
 */
export interface APIReqKousyouRemodelSlotRecoverRequest {
  api_dev_num: string
  api_menu_id: string
  api_slot_id: string
  api_verno: string
}
