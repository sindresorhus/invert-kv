import test from 'ava';
import m from '.';

test('test', t => {
	t.deepEqual(
		m({foo: 'bar', unicorn: 'rainbow'}),
		{bar: 'foo', rainbow: 'unicorn'}
	);
});
