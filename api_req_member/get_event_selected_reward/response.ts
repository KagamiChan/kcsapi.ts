/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_member/get_event_selected_reward
 */
export interface APIReqMemberGetEventSelectedRewardResponse {
  api_get_item_list: APIGetItemList[]
}

export interface APIGetItemList {
  api_id: number
  api_item_no: number
  api_type: number
  api_value: number
}
