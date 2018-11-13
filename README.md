# KCSAPI: *K*antai *C*ollection *S*erver _API_

Types for Kantai Collection (Phase 2) API

## In brief

This library aims to help typescript developers for Kantai Colection (Kancolle) related projects. A good API typing unveils hidden pitfalls created by Mr. Tanaka / C2 Architecture, and also prevents typo bugs.

## How are types generated

1. Collect sample api data, both request and response
1. Feed the samples into type generator, namely, quicktype
1. Save the generated type

## When types get updated

### API change

In case the API shape change, old sample files will be completely replaced by new ones (if possible)

### Hidden difference or not covered endpoint

A new sample file will be added, with detail description

## Samples

### Anonymization

Samples will be anonymized to remove sensitive data with which the provider could be identified by game service or third party.

## Liccense

MIT
