/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/furniture
 */
export interface APIGetMemberFurnitureResponse {
  api_furniture_id: number
  api_furniture_no: number
  api_furniture_type: number
  api_id: number
}
