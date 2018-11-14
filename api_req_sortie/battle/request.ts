/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_sortie/battle
 */
export interface APIReqSortieBattleRequest {
  api_formation: string
  api_recovery_type: string
  api_start?: string
  api_verno: string
}
