/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_quest/clearitemget
 */
export interface APIReqQuestClearitemgetRequest {
  api_quest_id: string
  api_select_no?: string
  api_select_no2?: string
  api_verno: string
}
