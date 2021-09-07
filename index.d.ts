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
	KeyType extends PropertyKey,
	ValueType extends PropertyKey
>(
	object: {[key in KeyType]: ValueType}
): {[key in ValueType]: KeyType extends number ? Exclude<KeyType, number> | string : KeyType};
