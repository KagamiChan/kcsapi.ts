/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_start2/get_option_setting
 */
export interface APIStart2GetOptionSettingResponse {
  api_skin_id: number
  api_volume_setting: APIVolumeSetting
}

export interface APIVolumeSetting {
  api_be_left: number
  api_bgm: number
  api_duty: number
  api_se: number
  api_voice: number
}
