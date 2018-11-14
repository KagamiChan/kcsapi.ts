/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_hensei/preset_register
 */
export interface APIReqHenseiPresetRegisterResponse {
  api_name: string
  api_name_id: string
  api_preset_no: number
  api_ship: number[]
}
