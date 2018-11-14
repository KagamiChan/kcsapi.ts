/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_kousyou/destroyship
 */
export interface APIReqKousyouDestroyshipResponse {
  api_material: number[]
  api_unset_list: { [key: string]: number[] }
}
