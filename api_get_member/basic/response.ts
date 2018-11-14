/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/basic
 */
export interface APIGetMemberBasicResponse {
  api_active_flag: number
  api_comment: string
  api_comment_id: string
  api_count_deck: number
  api_count_kdock: number
  api_count_ndock: number
  api_experience: number
  api_fcoin: number
  api_firstflag: number
  api_fleetname: null
  api_furniture: number[]
  api_level: number
  api_max_chara: number
  api_max_kagu: number
  api_max_slotitem: number
  api_medals: number
  api_member_id: string
  api_ms_count: number
  api_ms_success: number
  api_nickname: string
  api_nickname_id: string
  api_playtime: number
  api_pt_challenged: number
  api_pt_challenged_win: number
  api_pt_lose: number
  api_pt_win: number
  api_pvp: number[]
  api_rank: number
  api_st_lose: number
  api_st_win: number
  api_starttime: number
  api_tutorial: number
  api_tutorial_progress: number
}
