import { Readable } from 'stream'
import path from 'path'
import childProcess from 'child_process'
import prettier from 'prettier'
import glob from 'glob'
import { groupBy, Dictionary } from 'lodash'
import { quicktype, InputData, jsonInputForTargetLanguage } from 'quicktype/dist/quicktype-core'

import { copyright, getEndPointComment } from './comments'

const getQuicktypeCli = (): string =>
  path.resolve(__dirname, '../node_modules/quicktype/dist/cli/index.js')

/**
 * Turns first character to upper case
 * @param content string to capitalize
 */
const capitalize = (content: string): string =>
  `${content[0].toUpperCase()}${content.slice(1, content.length)}`

const acronymMap: { [key: string]: string } = {
  api: 'API',
  oss: 'OSS',
  sp: 'SP',
}

const capitalizeSegment = (content: string): string => acronymMap[content] || capitalize(content)

/* tslint:disable-next-line @typescript-eslint/no-explicit-any */
const addSentinel = (data: any): any => {
  if (Array.isArray(data)) {
    return data.map(addSentinel)
  }
  if (data !== null && typeof data === 'object') {
    const keys = Object.keys(data)
    const processed = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, addSentinel(v)]))
    if (keys.length >= 2 && !keys.every(k => /^\d+$/.test(k))) {
      const nonNullValues: unknown[] = Object.values(data).filter(v => v !== null)
      if (nonNullValues.length > 0) {
        if (nonNullValues.every(v => typeof v === typeof nonNullValues[0])) {
          return { ...processed, __sentinel: 'Tanaka' }
        }
      }
    }
    return processed
  }
  return data
}

const stripClassSuffix = (content: string): string => {
  const names = Array.from(content.matchAll(/\bexport interface (\w+)Class\b/g), m => m[1])
  return names.reduce((acc, name) => acc.split(`${name}Class`).join(name), content)
}

const retainTopLevelName = (content: string, topLevel: string): string => {
  if (new RegExp(`\\bexport interface ${topLevel}\\b`).test(content)) {
    return stripClassSuffix(content)
  }

  return stripClassSuffix(content.split(`${topLevel}Class`).join(topLevel))
}

/**
 * Derives top level interface name from file path
 * @param filename the path
 */
export const getTopLevel = (filename: string): string =>
  path
    .relative(path.resolve(__dirname, '../'), filename)
    .replace(path.extname(filename), '')
    .split(/[_/\\]/)
    .map(capitalizeSegment)
    .join('')

export const prettify = (content: string): string =>
  prettier.format(content, {
    semi: false,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
    parser: 'typescript',
  })

/**
 * Feeds sample data to quicktype programmatic API and generate types
 * @param data sample data for generation
 * @param filename path of the output file (used to derive top-level name)
 */
/* tslint:disable-next-line @typescript-eslint/no-explicit-any */
export const getType = async (data: any, filename: string): Promise<string> => {
  const topLevel = getTopLevel(filename)
  const input = jsonInputForTargetLanguage('typescript')
  const samples = (Array.isArray(data) ? data : [data]).map(d => JSON.stringify(addSentinel(d)))
  await input.addSource({ name: topLevel, samples })
  const inputData = new InputData()
  inputData.addInput(input)
  const result = await quicktype({
    lang: 'typescript',
    inputData,
    alphabetizeProperties: true,
    inferEnums: false,
    rendererOptions: { 'just-types': 'true' },
  })
  const stripped = result.lines.join('\n').replace(/^ *__sentinel\??: .*\r?\n/gm, '')
  const normalizedResult = retainTopLevelName(stripped, topLevel)
  return normalizedResult.length
    ? prettify(`${copyright}\n${getEndPointComment(filename)}${normalizedResult}`)
    : ''
}

/**
 * Feeds sample data to spawned quicktype and generate json schemas
 * @param data sample data for generation
 * @param topLevel top level interface name
 */
/* tslint:disable-next-line @typescript-eslint/no-explicit-any */
export const getSchema = (data: any, filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    const topLevel = getTopLevel(filename)
    const quicktypeCli = getQuicktypeCli()

    const child = childProcess.spawn(process.execPath, [
      quicktypeCli,
      '--alphabetize-properties',
      '--no-enums',
      '--lang',
      'schema',
      '--top-level',
      topLevel,
    ])
    let result = ''
    let error = ''
    child.stdout.on('data', chunk => {
      result += chunk
    })
    child.stderr.on('data', chunk => {
      error += chunk
    })
    child.on('error', reject)
    child.on('close', (code, signal) => {
      if (code > 0) {
        reject(
          new Error(error || `quicktype exited with code ${code}${signal ? ` (${signal})` : ''}`),
        )
        return
      }
      resolve(result.toString())
    })
    const source = new Readable()
    source._read = (): void => {} // eslint-disable-line @typescript-eslint/unbound-method, no-underscore-dangle
    source.push(JSON.stringify(data))
    source.push(null)
    source.pipe(child.stdin)
  })

export const parseInterfaces = (content: string): { [name: string]: string } =>
  content.split(/(?=\bexport interface \w)/).reduce<{ [name: string]: string }>((result, block) => {
    const m = /^export interface (\w+)\s*(\{[\s\S]*\})/.exec(block)
    if (!m) return result
    return { ...result, [m[1]]: m[2] }
  }, {})

const propTypePairs = (body: string, definedNames: Set<string>): [string, string][] =>
  (body.match(/\bapi_\w+\??\s*:\s*[A-Z]\w+/g) ?? []).reduce<[string, string][]>((acc, m) => {
    const pm = /\bapi_(\w+)\??\s*:\s*([A-Z]\w+)/.exec(m)
    return pm && definedNames.has(pm[2]) ? [...acc, [pm[1], pm[2]]] : acc
  }, [])

type RenameAcc = { renames: { [from: string]: string }; targets: Set<string> }

export const deriveWithinFileRenames = (
  content: string,
  topLevelName: string,
): { [from: string]: string } => {
  const interfaces = parseInterfaces(content)
  const definedNames = new Set(Object.keys(interfaces))

  const typeToProps = Object.values(interfaces).reduce<{ [type: string]: string[] }>(
    (acc, body) =>
      propTypePairs(body, definedNames)
        .filter(([, type]) => type !== topLevelName)
        .reduce(
          (inner, [prop, type]) => ({ ...inner, [type]: [...(inner[type] ?? []), prop] }),
          acc,
        ),
    {},
  )

  const { renames: pass1Renames, targets: pass1Targets } = Object.entries(typeToProps)
    .filter(([typeName]) => typeName !== topLevelName)
    .reduce<RenameAcc>(
      ({ renames, targets }, [typeName, props]) => {
        const freq = props
          .map(p => p.replace(/\d+$/, '').replace(/s$/, ''))
          .reduce<{ [b: string]: number }>((acc, b) => ({ ...acc, [b]: (acc[b] ?? 0) + 1 }), {})
        const topBase = Object.entries(freq).sort(
          (a, b) => b[1] - a[1] || a[0].length - b[0].length,
        )[0][0]
        const newName = `API${topBase
          .split('_')
          .map(capitalizeSegment)
          .join('')}`
        if (newName === typeName || definedNames.has(newName) || targets.has(newName)) {
          return { renames, targets }
        }
        return {
          renames: { ...renames, [typeName]: newName },
          targets: new Set([...targets, newName]),
        }
      },
      { renames: {}, targets: new Set() },
    )

  const { renames: pass2Renames } = Object.keys(interfaces)
    .filter(name => name !== topLevelName && !pass1Renames[name])
    .reduce<RenameAcc>(
      ({ renames, targets }, name) => {
        const base = name.replace(/\d+$/, '')
        if (
          base === name ||
          pass1Renames[base] !== undefined ||
          (interfaces[base] !== undefined && interfaces[base] !== interfaces[name]) ||
          Object.keys(interfaces).some(n => n !== name && n.replace(/\d+$/, '') === base) ||
          targets.has(base)
        ) {
          return { renames, targets }
        }
        return { renames: { ...renames, [name]: base }, targets: new Set([...targets, base]) }
      },
      { renames: {}, targets: pass1Targets },
    )

  return { ...pass1Renames, ...pass2Renames }
}

export const applyRenames = (content: string, renames: { [from: string]: string }): string => {
  const renameInLine = (line: string): string =>
    Object.entries(renames).reduce(
      (acc, [from, to]) => acc.replace(new RegExp(`\\b${from}\\b`, 'g'), to),
      line,
    )
  const isComment = (line: string): boolean => {
    const t = line.trimStart()
    return t.startsWith('*') || t.startsWith('//') || t.startsWith('/*')
  }
  return content
    .split('\n')
    .map(line => (isComment(line) ? line : renameInLine(line)))
    .join('\n')
}

export const getSampleList = (): Dictionary<string[]> => {
  const allFiles = glob.sync(path.resolve(__dirname, '../samples/**/*.json'))
  const sampleRoot = path.resolve(__dirname, '../samples')

  return groupBy<string>(allFiles, file =>
    path.resolve(__dirname, `../${path.dirname(path.relative(sampleRoot, file))}.ts`),
  )
}
