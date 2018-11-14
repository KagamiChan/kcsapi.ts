/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_practice/battle
 */
export interface APIReqPracticeBattleRequest {
  api_deck_id: string
  api_enemy_id: string
  api_formation_id: string
  api_start?: string
  api_verno: string
}
