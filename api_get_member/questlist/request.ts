/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_get_member/questlist
 */
export interface APIGetMemberQuestlistRequest {
  api_page_no: string
  api_tab_id: string
  api_verno: string
}
