'use strict';
var assert = require('assert');
var invertKv = require('./');

it('should invert key/val of an object', function () {
	assert.deepEqual(
		invertKv({foo: 'bar', unicorn: 'rainbow'}),
		{bar: 'foo', rainbow: 'unicorn'}
	);
});
