/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/preset_deck
 */
export interface APIGetMemberPresetDeckResponse {
  api_deck: { [key: string]: APIDeck }
  api_max_num: number
}

export interface APIDeck {
  api_name: string
  api_name_id: string
  api_preset_no: number
  api_ship: number[]
}
