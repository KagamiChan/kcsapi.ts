/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/picture_book
 */
export interface APIGetMemberPictureBookResponse {
  api_list: APIList[]
}

export interface APIList {
  api_baku?: number
  api_cnum?: number
  api_ctype?: number
  api_flag?: number[]
  api_houg: number
  api_houk?: number
  api_houm?: number
  api_index_no: number
  api_info?: string
  api_kaih?: number
  api_leng: number
  api_name: string
  api_q_voice_info?: APIQVoiceInfo[]
  api_raig: number
  api_saku?: number
  api_sinfo?: string
  api_soku?: number
  api_souk: number
  api_state: Array<number[] | number>
  api_stype?: number
  api_table_id: number[]
  api_taik?: number
  api_tais: number
  api_tyku: number
  api_type?: number[]
  api_yomi?: string
}

export interface APIQVoiceInfo {
  api_icon_id: number
  api_no: number
  api_voice_id: number
}
