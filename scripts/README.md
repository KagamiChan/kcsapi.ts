# Maintaining the typing

## Current workflow

### Configuration

Copy `.env.example` to `.env` at the repository root and fill in:

- `KCSAPI_SOURCE_PATH`, the folder holding the packets saved by poi, scanned recursively for `*.json`. Each file is expected to be in the poi packet format defined in `types.ts`
- `KCSAPI_LIMIT`, a date, only packets saved after it are processed

### Commit changes with `commit.ts`

This script reads the packets saved after `KCSAPI_LIMIT` directly from `KCSAPI_SOURCE_PATH`, generates a typing for each of them, and compares the generated result with current result, if any difference is observed, the file will be copied into samples folder and become part of new code base (That's why it is called commit).

Run it as `yarn commit` to keep `KCSAPI_LIMIT` where it is, which is handy while iterating over the same set of packets. Run it as `yarn commit --advance` to move `KCSAPI_LIMIT` to the time the run started, so that the next run only sees the newly saved packets. The limit is only moved when the run finished without error.

### Generate new typings with `generate.ts`

The new typings will be re-generated base on all the sample files. We have to manually modify some names in the generated result because the typings and the index file is generated in different ways.
