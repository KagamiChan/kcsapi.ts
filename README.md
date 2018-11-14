# KCSAPI: *K*antai *C*ollection *S*erver _API_

![npm](https://img.shields.io/npm/v/kcsapi.svg?style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/KagamiChan/kcsapi.ts.svg?style=flat-square)](https://github.com/KagamiChan/kcsapi.ts/issues)
[![GitHub license](https://img.shields.io/github/license/KagamiChan/kcsapi.ts.svg?style=flat-square)](https://github.com/KagamiChan/kcsapi.ts/blob/master/LICENSE)

Types for Kantai Collection (Phase 2) API

## In brief

This library aims to help typescript developers for Kantai Colection (Kancolle) related projects. A good API typing unveils hidden pitfalls created by Mr. Tanaka / C2 Architecture, and also prevents typo bugs.

## Usage

### Install

```shell
npm install --save-dev kcsapi
```

or

```shell
yarn add --dev kcsapi
```

### Use

```ts
// recommended
import { APIStart2GetDataResponse, APIMstMapinfo } from 'kcsapi/api_start2/getData/response'

// each API's top level interface could be imported in this way
import { APIStart2GetDataResponse } from 'kcsapi'
```

### How are interfaces named

whole end point omitting `kcsapi` part will be splited by `_` and `/`, and each part's first character will be upper cased.

Exception: `api` will always be `API`

Examples:

| Endpoint                               | Request                           | Response                           |
| -------------------------------------- | --------------------------------- | ---------------------------------- |
| `/kcsapi/api_req_member/get_incentive` | `APIReqMemberGetIncentiveRequest` | `APIReqMemberGetIncentiveResponse` |
| `/kcsapi/api_start2/getData`           | `APIStart2GetDataRequest`         | `APIStart2GetDataResponse`         |

## Details

### How are types generated

1. Collect sample api data, both request and response
1. Feed the samples into type generator, namely, quicktype
1. Save the generated type

### When types get updated

#### API change

In case the API shape change, old sample files will be completely replaced by new ones (if possible).

#### Hidden difference or not covered endpoint

A new sample file will be added, with detail description.

### Anonymization of samples

Samples will be anonymized to remove sensitive data with which the provider could be identified by game service or third party. All string values are replaced by `Tanaka` and numbers by `0`. This way API data shape is preserved and player specific information is removed.

## Liccense

MIT
