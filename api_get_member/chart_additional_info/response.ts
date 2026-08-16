/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_get_member/chart_additional_info
 */
export interface APIGetMemberChartAdditionalInfoResponse {
  api_deck_param: APIDeckParam[]
}

export interface APIDeckParam {
  api_atp_value?: APIAtpValue
  api_seiku_value: number
  api_tp_value: number
}

export interface APIAtpValue {
  '625': number
}
