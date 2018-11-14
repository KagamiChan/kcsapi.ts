/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/sortie_conditions
 */
export interface APIGetMemberSortieConditionsResponse {
  api_war: APIWar
}

export interface APIWar {
  api_lose: string
  api_rate: string
  api_win: string
}
