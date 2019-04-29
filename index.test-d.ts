import {expectType} from 'tsd';
import invertKeyValue = require('.');

expectType<{[key: string]: string}>(invertKeyValue({foo: 'bar', '🦄': '🌈'}));
expectType<{[key: number]: string}>(invertKeyValue({foo: 1}));
expectType<{[key: number]: string}>(invertKeyValue({1: 1}));
