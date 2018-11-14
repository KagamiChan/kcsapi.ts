/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

import path from 'path'

export const copyright = `
/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */
`

const root = path.resolve(__dirname, '../')

export const getEndPointComment = (filename: string) => `
/**
 * type for API ${path.basename(filename).replace('.ts', '')} at /kcsapi/${path.relative(
  root,
  path.dirname(filename),
)}
 */
`
