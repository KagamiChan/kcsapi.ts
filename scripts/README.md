# Maintaining the typing

## Current workflow

### Copy to staging folder with `copy-to-staging.ts`

Copy the saved game packets from a source folder to staging folder, according to the given start date.

The script is expecting each files are in poi packet format defined in `types.ts`. And the script is not reading any parameters now, need to manually update in the source code.

### Commit changes with `commit.ts`

This script will generate a typing for each staged file, and compare the generated result with current result, if any difference is observed, the staged file will be copied into samples folder and become part of new code base (That's why it is called commit).

### Generate new typings with `generate.ts`

The new typings will be re-generated base on all the sample files. We have to manually modify some names in the generated result because the typings and the index file is generated in different ways.
