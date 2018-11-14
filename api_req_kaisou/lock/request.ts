/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_kaisou/lock
 */
export interface APIReqKaisouLockRequest {
  api_slotitem_id: string
  api_verno: string
}
