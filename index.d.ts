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
	T extends Record<PropertyKey, PropertyKey>
>(
	object: T
): {[P in keyof T as T[P]]: keyof T extends number ? Exclude<keyof T, number> | string : P};
