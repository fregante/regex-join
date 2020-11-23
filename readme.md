# regex-join [![][badge-gzip]][link-bundlephobia]

[badge-gzip]: https://img.shields.io/bundlephobia/minzip/regex-join.svg?label=gzipped
[link-bundlephobia]: https://bundlephobia.com/result?p=regex-join

> Merge multiple regexes and strings into one, preserving all the flags, automatically escaping the strings

## Install

```
npm install regex-join
```

```js
const regexJoin = require('regex-join');
```

## Usage

```js
regexJoin(/^beginning/g, / (.+) end/);
// => /^beginning (.+) end/g
```

```js
regexJoin('My (last) name is ', /(\w+)/g);
// => /My \(last\) name is (\w+)/g
```

## API

### regexJoin(part, part[, part,...])

Merges any number of `RegExp` or strings into one and returns a single `RegExp`

#### part

Type: `RegExp | string`

## Related

- [one-event](https://github.com/fregante/one-event) - Micro module to add an event listener to be executed only once.
- [select-dom](https://github.com/fregante/select-dom) - Lightweight `querySelector`/`All` wrapper that outputs an Array.
- [doma](https://github.com/fregante/doma) - Parse an HTML string into `DocumentFragment` or one `Element`, in a few bytes.
- [Refined GitHub](https://github.com/sindresorhus/refined-github) - Uses this module.
