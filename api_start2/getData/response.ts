/**
 * kcsapi.ts - Kantai Collection API TypeScript types
 * Copyright (c) 2018- Poi contributors.
 *
 * @license MIT
 */

export interface APIStart2GetDataResponse {
  api_mst_ship: APIMstShip[]
  api_mst_slotitem_equiptype: APIMstSlotitemEquiptype[]
  api_mst_equip_exslot: number[]
  api_mst_equip_exslot_ship: APIMstEquipExslotShip[]
  api_mst_stype: APIMstStype[]
  api_mst_slotitem: APIMstSlotitem[]
  api_mst_furnituregraph: APIMstFurnituregraph[]
  api_mst_useitem: APIMstUseitem[]
  api_mst_payitem: APIMstPayitem[]
  api_mst_item_shop: APIMstItemShop
  api_mst_maparea: APIMstMaparea[]
  api_mst_mapinfo: APIMstMapinfo[]
  api_mst_mapbgm: APIMstMapbgm[]
  api_mst_mission: APIMstMission[]
  api_mst_const: APIMstConst
  api_mst_shipupgrade: APIMstShipupgrade[]
  api_mst_bgm: APIMstBgm[]
  api_mst_equip_ship: APIMstEquipShip[]
  api_mst_furniture: APIMstFurniture[]
  api_mst_shipgraph: APIMstShipgraph[]
}

export interface APIMstBgm {
  api_id: number
  api_name: string
}

export interface APIMstConst {
  api_dpflag_quest: API
  api_boko_max_ships: API
  api_parallel_quest_max: API
}

export interface API {
  api_string_value: string
  api_int_value: number
}

export interface APIMstEquipExslotShip {
  api_slotitem_id: number
  api_ship_ids: number[]
}

export interface APIMstEquipShip {
  api_ship_id: number
  api_equip_type: number[]
}

export interface APIMstFurniture {
  api_id: number
  api_type: number
  api_no: number
  api_title: string
  api_description: string
  api_rarity: number
  api_price: number
  api_saleflg: number
  api_season: number
  api_version: number
  api_outside_id: number
  api_active_flag: number
}

export interface APIMstFurnituregraph {
  api_id: number
  api_type: number
  api_no: number
  api_filename: string
  api_version: string
}

export interface APIMstItemShop {
  api_cabinet_1: number[]
  api_cabinet_2: number[]
}

export interface APIMstMaparea {
  api_id: number
  api_name: string
  api_type: number
}

export interface APIMstMapbgm {
  api_id: number
  api_maparea_id: number
  api_no: number
  api_moving_bgm: number
  api_map_bgm: number[]
  api_boss_bgm: number[]
}

export interface APIMstMapinfo {
  api_id: number
  api_maparea_id: number
  api_no: number
  api_name: string
  api_level: number
  api_opetext: string
  api_infotext: string
  api_item: number[]
  api_max_maphp: null
  api_required_defeat_count: number | null
  api_sally_flag: number[]
}

export interface APIMstMission {
  api_id: number
  api_disp_no: string
  api_maparea_id: number
  api_name: string
  api_details: string
  api_time: number
  api_deck_num: number
  api_difficulty: number
  api_use_fuel: number
  api_use_bull: number
  api_win_item1: number[]
  api_win_item2: number[]
  api_return_flag: number
}

export interface APIMstPayitem {
  api_id: number
  api_type: number
  api_name: string
  api_description: string
  api_shop_description: string
  api_item: number[]
  api_price: number
}

export interface APIMstShip {
  api_id: number
  api_sortno?: number
  api_sort_id: number
  api_name: string
  api_yomi: string
  api_stype: number
  api_ctype: number
  api_afterlv?: number
  api_aftershipid?: string
  api_taik?: number[]
  api_souk?: number[]
  api_houg?: number[]
  api_raig?: number[]
  api_tyku?: number[]
  api_luck?: number[]
  api_soku: number
  api_leng?: number
  api_slot_num: number
  api_maxeq?: number[]
  api_buildtime?: number
  api_broken?: number[]
  api_powup?: number[]
  api_backs?: number
  api_getmes?: string
  api_afterfuel?: number
  api_afterbull?: number
  api_fuel_max?: number
  api_bull_max?: number
  api_voicef?: number
  api_tais?: number[]
}

export interface APIMstShipgraph {
  api_id: number
  api_sortno: number
  api_filename: string
  api_version: string[]
  api_boko_n: number[]
  api_boko_d: number[]
  api_kaisyu_n: number[]
  api_kaisyu_d: number[]
  api_kaizo_n: number[]
  api_kaizo_d: number[]
  api_map_n: number[]
  api_map_d: number[]
  api_ensyuf_n: number[]
  api_ensyuf_d: number[]
  api_ensyue_n: number[]
  api_battle_n: number[]
  api_battle_d: number[]
  api_weda: number[]
  api_wedb: number[]
}

export interface APIMstShipupgrade {
  api_id: number
  api_current_ship_id: number
  api_original_ship_id: number
  api_upgrade_type: number
  api_upgrade_level: number
  api_drawing_count: number
  api_catapult_count: number
  api_report_count: number
  api_sortno: number
}

export interface APIMstSlotitem {
  api_id: number
  api_sortno: number
  api_name: string
  api_type: number[]
  api_taik: number
  api_souk: number
  api_houg: number
  api_raig: number
  api_soku: number
  api_baku: number
  api_tyku: number
  api_tais: number
  api_atap: number
  api_houm: number
  api_raim: number
  api_houk: number
  api_raik: number
  api_bakk: number
  api_saku: number
  api_sakb: number
  api_luck: number
  api_leng: number
  api_rare: number
  api_broken: number[]
  api_info: string
  api_usebull: string
  api_version?: number
  api_cost?: number
  api_distance?: number
}

export interface APIMstSlotitemEquiptype {
  api_id: number
  api_name: string
  api_show_flg: number
}

export interface APIMstStype {
  api_id: number
  api_sortno: number
  api_name: string
  api_scnt: number
  api_kcnt: number
  api_equip_type: { [key: string]: number }
}

export interface APIMstUseitem {
  api_id: number
  api_usetype: number
  api_category: number
  api_name: string
  api_description: string[]
  api_price: number
}
