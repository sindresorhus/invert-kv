import {expectType, expectAssignable} from 'tsd';
import invertKeyValue from './index.js';

expectAssignable<Record<string, string>>(invertKeyValue({foo: 'bar', '🦄': '🌈'}));
expectAssignable<Record<number, string>>(invertKeyValue({foo: 1}));
expectType<Record<number, string>>(invertKeyValue({1: 1}));
expectType<Record<symbol, string>>(invertKeyValue({foo: Symbol('🦄')}));
