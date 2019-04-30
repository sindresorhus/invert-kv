# invert-kv [![Build Status](https://travis-ci.org/sindresorhus/invert-kv.svg?branch=master)](https://travis-ci.org/sindresorhus/invert-kv)

> Invert the key/value of an object. Example: `{foo: 'bar'}` → `{bar: 'foo'}`


## Install

```
$ npm install invert-kv
```


## Usage

```js
const invertKeyValue = require('invert-kv');

invertKeyValue({foo: 'bar', '🦄': '🌈'});
//=> {bar: 'foo', '🌈': '🦄'}
```


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
