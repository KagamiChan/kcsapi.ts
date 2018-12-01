/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_practice/change_matching_kind
 */
export interface APIReqPracticeChangeMatchingKindRequest {
  api_selected_kind: string
  api_verno: string
}
