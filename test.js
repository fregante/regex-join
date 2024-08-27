import test from 'ava';
import regexJoin, {regexJoinWithSeparator} from './index.js';

function macro(t, input, expected) {
	t.deepEqual(regexJoin(...input), expected);
}

test('Merge 2 regexes', macro, [/all/, /bees/], /allbees/);

test(
	'Escaped characters must be preserved',
	macro,
	[/al\l\(/, /bees/],
	/al\l\(bees/,
);

test(
	'Special characters must be preserved',
	macro,
	[/al.*/, /be(e)+s/],
	/al.*be(e)+s/,
);

test('Delimiters must be preserved', macro, [/^all/, /bees$/], /^allbees$/);

test(
	'Delimiters must be preserved even if the output is meaningless',
	macro,
	[/^all/, /^bees$/],
	/^all^bees$/,
);

test('Flags must be preserved', macro, [/all/i, /bees/g], /allbees/gi);

test(
	'Multiple identical flags must be deduplicated',
	macro,
	[/all/g, /bees/g],
	/allbees/g,
);

test('regex-join with strings', macro, ['all', 'bees'], /allbees/);

test('Mixed with strings', macro, [/all/, 'blue', /bees/], /allbluebees/);

test(
	'Regex syntax must be escaped in strings',
	macro,
	[/al\l\(/, '^(cute.*)^', /bees/],
	/al\l\(\^\(cute\.\*\)\^bees/,
);

test(
	'Strings that look like regex must be escaped',
	macro,
	[/all/, '/cute/', /bees/],
	/all\/cute\/bees/,
);

test(
	'Readme example 1',
	macro,
	[/^beginning/g, / (.+) end/],
	/^beginning (.+) end/g,
);

test(
	'Readme example 2',
	macro,
	['My (last) name is ', /(\w+)/g],
	/My \(last\) name is (\w+)/g,
);

test('regexJoinWithSeparator', t => {
	t.deepEqual(regexJoinWithSeparator('|', ['a', 'b']), /a|b/);
	t.deepEqual(regexJoinWithSeparator('|', [/a/, 'b']), /a|b/);
	t.deepEqual(regexJoinWithSeparator('|', ['a', /b/]), /a|b/);
});
