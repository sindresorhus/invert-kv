'use strict';
module.exports = function (object) {
	if (typeof object !== 'object') {
		throw new TypeError('Expected an object');
	}

	const ret = {};

	Object.keys(object)
		.forEach(function (key) {	// eslint-disable-line prefer-arrow-callback
			const value = object[key];
			ret[value] = key;
		});

	return ret;
};
