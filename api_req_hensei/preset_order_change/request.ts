/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_hensei/preset_order_change
 */
export interface APIReqHenseiPresetOrderChangeRequest {
  api_preset_from: string
  api_preset_to: string
  api_verno: string
}
