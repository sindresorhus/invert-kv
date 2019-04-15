'use strict';
module.exports = function(object) {
	if (typeof object !== 'object') {
		throw new TypeError('Expected an object');
	}

	const ret = {};

	for (var key in Object.keys(object)) {
		const value = object[key];
		ret[value] = key;
	}

	return ret;
};
