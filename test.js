import test from 'ava';
import invertKeyValue from '.';

test('inverts string/number properties', t => {
	t.deepEqual(
		invertKeyValue({foo: 'bar', unicorn: 'rainbow', 1: 'one'}),
		{bar: 'foo', rainbow: 'unicorn', one: '1'}
	);
});

test('inverts symbol properties', t => {
	const symbol = Symbol('fixture');
	t.deepEqual(
		invertKeyValue({foo: symbol, unicorn: 'rainbow'}),
		{[symbol]: 'foo', rainbow: 'unicorn'}
	);
	t.deepEqual(
		invertKeyValue({[symbol]: 'foo', rainbow: 'unicorn'}),
		{foo: symbol, unicorn: 'rainbow'}
	);
});
