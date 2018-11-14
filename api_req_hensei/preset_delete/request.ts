/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_hensei/preset_delete
 */
export interface APIReqHenseiPresetDeleteRequest {
  api_preset_no: string
  api_verno: string
}
