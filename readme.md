# arraybuffer-to-string [![unstable](https://img.shields.io/badge/stability-unstable-orange.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/arraybuffer-to-string.svg)](https://travis-ci.org/dfcreative/arraybuffer-to-string)

Convert _ArrayBuffer_ to string of encoding.

[![npm install arraybuffer-to-string](https://nodei.co/npm/arraybuffer-to-string.png?mini=true)](https://npmjs.org/package/arraybuffer-to-string/)

```js
var ab2str = require('arraybuffer-to-string')

// Plain 'Hello World!'
var abuf1 = ab2str(toString(b2ab(Buffer.from('Ձאab', 'utf8')), 'base64'))

// Base-64 'Hello World!'
var abuf2 = ab2str('SGVsbG8sIFdvcmxkIQ%3D%3D')

// Barebones data-uri 'Hello World!'
var abuf3 = ab2str('data:,Hello%2C%20World!')

// Base-64 data-uri 'Hello World!'
var abuf4 = ab2str('data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D')
```

Note: in browser it relies upon [TextDecoder API](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode) for custom charsets, so if you are dealing with something different from `utf8`, `ascii`, `binary` or `base64` in old browsers, please include [encoding polyfill](https://github.com/inexorabletash/text-encoding).

### Related

* [data-uri-to-buffer](https://www.npmjs.com/package/data-uri-to-buffer) − decode URI string to Buffer.
* [to-array-buffer](https://www.npmjs.com/package/to-array-buffer) − convert anything to ArrayBuffer.
