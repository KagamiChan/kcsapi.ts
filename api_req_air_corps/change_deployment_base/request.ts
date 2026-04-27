/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_air_corps/change_deployment_base
 */
export interface APIReqAirCorpsChangeDeploymentBaseRequest {
  api_area_id: string
  api_base_id: string
  api_base_id_src: string
  api_item_id: string
  api_squadron_id: string
  api_verno: string
}
