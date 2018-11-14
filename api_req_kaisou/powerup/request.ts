/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/powerup
 */
export interface APIReqKaisouPowerupRequest {
  api_id: string
  api_id_items: string
  api_verno: string
}
