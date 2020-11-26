# regex-join [![][badge-gzip]][link-bundlephobia]

[badge-gzip]: https://img.shields.io/bundlephobia/minzip/regex-join.svg?label=gzipped
[link-bundlephobia]: https://bundlephobia.com/result?p=regex-join

> Merge multiple regexes and strings into one, preserving all the flags, automatically escaping the strings

## Install

```
npm install regex-join
```

## Usage

```js
const regexJoin = require('regex-join');

// Place a dynamic string inside a regex
regexJoin(/\s*\(/, getNumber(), /\)$/g);
// => /\s*\(1234\)$/g

// Specify parts of a regex without making them unreadable with escapes
const someDomain = 'api.github.com';
regexJoin(/^/, 'https://', someDomain, /$/);
// => /^https:\/\/api\.github\.com$/

// Split long regexes into multiple lines with comments
regexJoin(
	/^https?:\/\//, // Protocol
	/[^/]+/, // Hostname
	/[^?]+/ // Pathname
);
// => /^https?:\/\/[^/]+[^?]+/
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
