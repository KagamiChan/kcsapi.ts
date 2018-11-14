/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_hensei/preset_register
 */
export interface APIReqHenseiPresetRegisterRequest {
  api_deck_id: string
  api_name: string
  api_name_id: string
  api_preset_no: string
  api_verno: string
}
