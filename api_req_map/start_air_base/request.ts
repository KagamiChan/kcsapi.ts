/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_map/start_air_base
 */
export interface APIReqMapStartAirBaseRequest {
  api_strike_point_1?: string
  api_strike_point_2?: string
  api_strike_point_3?: string
  api_verno: string
}
