/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_req_mission/return_instruction
 */
export interface APIReqMissionReturnInstructionRequest {
  api_deck_id: string
  api_verno: string
}
