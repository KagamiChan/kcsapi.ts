/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/record
 */
export interface APIGetMemberRecordResponse {
  api_cmt: string
  api_cmt_id: string
  api_complate: string[]
  api_deck: number
  api_experience: number[]
  api_friend: number
  api_furniture: number
  api_kdoc: number
  api_large_dock: number
  api_level: number
  api_material_max: number
  api_member_id: number
  api_mission: APIMission
  api_ndoc: number
  api_nickname: string
  api_nickname_id: string
  api_photo_url: string
  api_practice: API
  api_rank: number
  api_ship: number[]
  api_slotitem: number[]
  api_war: API
}

export interface APIMission {
  api_count: string
  api_rate: string
  api_success: string
}

export interface API {
  api_lose: string
  api_rate: string
  api_win: string
}
