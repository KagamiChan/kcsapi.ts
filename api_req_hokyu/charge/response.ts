/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_hokyu/charge
 */
export interface APIReqHokyuChargeResponse {
  api_material: number[]
  api_ship: APIShip[]
  api_use_bou: number
}

export interface APIShip {
  api_bull: number
  api_fuel: number
  api_id: number
  api_onslot: number[]
}
