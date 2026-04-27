/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_sortie/battleresult
 */
export interface APIReqSortieBattleresultRequest {
  api_btime: string
  'api_l_value3[0]'?: string
  'api_l_value3[1]'?: string
  'api_l_value3[2]'?: string
  'api_l_value3[3]'?: string
  'api_l_value3[4]'?: string
  'api_l_value3[5]'?: string
  'api_l_value[0]'?: string
  'api_l_value[1]'?: string
  'api_l_value[2]'?: string
  'api_l_value[3]'?: string
  'api_l_value[4]'?: string
  'api_l_value[5]'?: string
  api_verno: string
}
