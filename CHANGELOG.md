## 20180112

recent update 26th Dec

- `api_distance`: must be `Object` for now
- `api_get_member/mapinfo/response`: `api_event_map` structure change
- `/kcsapi/api_get_member/picture_book`: fields added for item picture
- `/kcsapi/api_req_sortie/ld_shooting`: new API
- `/kcsapi/api_req_combined_battle/ld_shooting`: a new API but no response has been captured yet

and various minor typing updates

## 20181202

recent update: 29th Nov

- `api_get_member/mapinfo/response`, `api_distance` changed from number to `Object`. The `number` type however could not be eliminated until next event (in that way event specific typing could be infered)
- `api_get_member/mapinfo/response`, map info structure update possibly due to 7-2
- `api_req_kaisou/marriage/response`, `api_sally_area` becomes optional, which is expected
- new API typing for `api_req_practice/change_matching_kind`
