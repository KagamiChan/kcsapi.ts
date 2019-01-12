/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_quest/clearitemget
 */
export interface APIReqQuestClearitemgetResponse {
  api_bounus: APIBounus[]
  api_bounus_count: number
  api_material: number[]
}

export interface APIBounus {
  api_count: number
  api_item?: APIItem
  api_type: number
}

export interface APIItem {
  api_id?: number
  api_id_from?: number
  api_id_to?: number
  api_message?: string
  api_name?: string
}
