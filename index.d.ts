// TODO: Extend this to symbol when TS allows symbols in index signatures:
// https://github.com/Microsoft/TypeScript/issues/1863
/**
Invert the key/value of an object.

@example
```
import invertKeyValue from 'invert-kv';

invertKeyValue({foo: 'bar', '🦄': '🌈'});
//=> {bar: 'foo', '🌈': '🦄'}
```
*/
export default function invertKeyValue<
	KeyType extends string | number,
	ValueType extends string | number | symbol
>(
	object: {[key in KeyType]: ValueType}
): {[key in ValueType]: KeyType extends number ? Exclude<KeyType, number> | string : KeyType};
