/**
 * poi data packet format
 */
export interface PoiPacket {
  method: string
  path: string
  body: any // tslint:disable-line no-any
  postBody: any // tslint:disable-line no-any
  time: number
}
