# arraybuffer-to-string [![unstable](https://img.shields.io/badge/stability-unstable-orange.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/arraybuffer-to-string.svg)](https://travis-ci.org/dfcreative/arraybuffer-to-string)

Convert _ArrayBuffer_ to string with optional encoding.

[![npm install arraybuffer-to-string](https://nodei.co/npm/arraybuffer-to-string.png?mini=true)](https://npmjs.org/package/arraybuffer-to-string/)

```js
var ab2str = require('arraybuffer-to-string')

var uint8 = new Uint8Array([ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100, 33 ])

ab2str(uint8) // 'Hello World!'
ab2str(uint8, 'base64') // 'SGVsbG8gV29ybGQh'
ab2str(uint8, 'hex') // '48656c6c6f20576f726c6421'
ab2str(uint8, 'iso-8859-2') // 'Hello World!'
```

### var str = arrayBufferToString(buffer, encoding='utf8')

Convert ArrayBuffer/ArrayBufferView/Array `buffer` to string with defined encoding. Available encoding: `utf8`, `binary`, `base64`, `hex`, `ascii`, `latin1`, `ucs2`, `utf16` and [many others](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding).

Note: in browser it relies on [TextDecoder API](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode), so if you are dealing with charsets other than `utf8`, `ascii`, `binary` or `base64` in old browsers, please include [encoding polyfill](https://github.com/inexorabletash/text-encoding).

### Related

* [string-to-arraybuffer](https://github.com/dfcreative/string-to-arraybuffer) − convert string to arraybuffer.
* [create-data-uri](https://www.npmjs.com/package/create-data-uri) − convert binary data to datauri string.
