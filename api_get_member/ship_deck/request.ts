/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_get_member/ship_deck
 */
export interface APIGetMemberShipDeckRequest {
  api_deck_rid: string
  api_verno: string
}
