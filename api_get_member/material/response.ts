/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/material
 */
export interface APIGetMemberMaterialResponse {
  api_id: number
  api_member_id: number
  api_value: number
}
