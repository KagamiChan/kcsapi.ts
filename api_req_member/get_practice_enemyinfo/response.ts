/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_member/get_practice_enemyinfo
 */
export interface APIReqMemberGetPracticeEnemyinfoResponse {
  api_cmt: string
  api_cmt_id: string
  api_deck: APIDeck
  api_deckname: string
  api_deckname_id: string
  api_experience: number[]
  api_friend: number
  api_furniture: number
  api_level: number
  api_member_id: number
  api_nickname: string
  api_nickname_id: string
  api_rank: number
  api_ship: number[]
  api_slotitem: number[]
}

export interface APIDeck {
  api_ships: APIShip[]
}

export interface APIShip {
  api_id: number
  api_level?: number
  api_ship_id?: number
  api_star?: number
}
