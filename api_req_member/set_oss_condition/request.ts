/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/set_oss_condition
 */
export interface APIReqMemberSetOSSConditionRequest {
  api_language_type: string
  'api_oss_items[0]': string
  'api_oss_items[1]': string
  'api_oss_items[2]': string
  'api_oss_items[3]': string
  'api_oss_items[4]': string
  'api_oss_items[5]': string
  'api_oss_items[6]': string
  'api_oss_items[7]': string
  api_verno: string
}
