/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/practice
 */
export interface APIGetMemberPracticeResponse {
  api_create_kind: number
  api_entry_limit?: number
  api_list: APIList[]
  api_selected_kind: number
}

export interface APIList {
  api_enemy_comment: string
  api_enemy_comment_id: string
  api_enemy_flag: number
  api_enemy_flag_ship: number
  api_enemy_id: number
  api_enemy_level: number
  api_enemy_name: string
  api_enemy_name_id: string
  api_enemy_rank: string
  api_medals: number
  api_state: number
}
