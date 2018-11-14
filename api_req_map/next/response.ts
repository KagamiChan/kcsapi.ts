/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

/**
 * type for API response at /kcsapi/api_req_map/next
 */
export interface APIReqMapNextResponse {
  api_airsearch: APIAirsearch
  api_bosscell_no: number
  api_bosscomp: number
  api_cell_flavor?: APICellFlavor
  api_color_no: number
  api_comment_kind: number
  api_destruction_battle?: APIDestructionBattle
  api_event_id: number
  api_event_kind: number
  api_eventmap?: APIEventmap
  api_get_eo_rate?: number
  api_happening?: APIHappening
  api_itemget?: APIItemget[]
  api_itemget_eo_comment?: APIItemgetEo
  api_itemget_eo_result?: APIItemgetEo
  api_maparea_id: number
  api_mapinfo_no: number
  api_next: number
  api_no: number
  api_offshore_supply?: APIOffshoreSupply
  api_production_kind: number
  api_rashin_flg: number
  api_rashin_id: number
  api_ration_flag?: number
  api_select_route?: APISelectRoute
}

export interface APIAirsearch {
  api_plane_type: number
  api_result: number
}

export interface APICellFlavor {
  api_message: string
  api_type: number
}

export interface APIDestructionBattle {
  api_air_base_attack: APIAirBaseAttack
  api_eSlot: Array<number[]>
  api_e_maxhps: number[]
  api_e_nowhps: number[]
  api_f_maxhps: number[]
  api_f_nowhps: number[]
  api_formation: number[]
  api_lost_kind: number
  api_ship_ke: number[]
  api_ship_lv: number[]
}

export interface APIAirBaseAttack {
  api_map_squadron_plane: { [key: string]: APIMapSquadronPlane[] } | null
  api_plane_from: Array<number[] | null>
  api_stage1: APIStage1
  api_stage2: null
  api_stage3: APIStage3
  api_stage_flag: number[]
}

export interface APIMapSquadronPlane {
  api_count: number
  api_mst_id: number
}

export interface APIStage1 {
  api_disp_seiku: number
  api_e_count: number
  api_e_lostcount: number
  api_f_count: number
  api_f_lostcount: number
  api_touch_plane: number[]
}

export interface APIStage3 {
  api_ebak_flag: number[]
  api_ecl_flag: number[]
  api_edam: number[]
  api_erai_flag: number[]
  api_fbak_flag: number[]
  api_fcl_flag: number[]
  api_fdam: number[]
  api_frai_flag: number[]
}

export interface APIEventmap {
  api_dmg: number
  api_max_maphp: number
  api_now_maphp: number
}

export interface APIHappening {
  api_count: number
  api_dentan: number
  api_icon_id: number
  api_mst_id: number
  api_type: number
  api_usemst: number
}

export interface APIItemget {
  api_getcount: number
  api_icon_id: number
  api_id: number
  api_name: string
  api_usemst: number
}

export interface APIItemgetEo {
  api_getcount: number
  api_id: number
  api_usemst: number
}

export interface APIOffshoreSupply {
  api_given_ship: number
  api_supply_ship: number
  api_use_num: number
}

export interface APISelectRoute {
  api_select_cells: number[]
}
