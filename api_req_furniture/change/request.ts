/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_furniture/change
 */
export interface APIReqFurnitureChangeRequest {
  api_desk: string
  api_floor: string
  api_season?: string
  api_shelf: string
  api_verno: string
  api_wallhanging: string
  api_wallpaper: string
  api_window: string
}
