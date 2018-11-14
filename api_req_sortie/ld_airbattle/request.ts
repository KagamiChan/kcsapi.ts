/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_sortie/ld_airbattle
 */
export interface APIReqSortieLdAirbattleRequest {
  api_formation: string
  api_recovery_type: string
  api_verno: string
}
