import escapeStringRegexp = require('escape-string-regexp');

function regexJoin(...expressions: Array<RegExp | string>): RegExp {
	const flags = [];
	const source = [];
	for (const part of expressions) {
		if (part instanceof RegExp) {
			source.push(part.source);
			flags.push(...part.flags); // One flag per string
		} else {
			source.push(escapeStringRegexp(part));
		}
	}

	return new RegExp(source.join(''), [...new Set(flags)].join(''));
}

export = regexJoin;
