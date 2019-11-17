/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_member/set_flagship_position
 */
export interface APIReqMemberSetFlagshipPositionRequest {
  api_position_id: string
  api_verno: string
}
