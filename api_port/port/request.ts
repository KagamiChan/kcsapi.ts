/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API request at /kcsapi/api_port/port
 */
export interface APIPortPortRequest {
  api_verno: string
  api_sort_key: string
  spi_sort_order: string
  api_port: string
}
