/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_furniture/buy
 */
export interface APIReqFurnitureBuyRequest {
  api_no: string
  api_type: string
  api_verno: string
}
