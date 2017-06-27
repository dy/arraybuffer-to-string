/**
 * @module arraybuffer-to-string/browser
 */

'use strict'

module.exports = function ArrayBufferToString (buffer, encoding) {
	if (encoding == null) encoding = 'utf8'

	var uint8 = new Uint8Array(buffer)

	if (encoding === 'hex') {
		var out = ''
		for (var i = 0, l = uint8.byteLength; i < l; ++i) {
			out += toHex(uint8[i])
		}
		return out
	}

	if (encoding === 'base64') {
		str = String.fromCharCode.apply(null, uint8)
		return btoa(str)
	}

	if (encoding === 'binary' ||
		encoding === 'latin1' ||
		!global.TextDecoder) {
		str = String.fromCharCode.apply(null, uint8)
		return str
	}


	//TextDecoder way
	if (encoding === 'utf16le') encoding = 'utf-16le'

	var decoder = new TextDecoder(encoding)
	var str = decoder.decode(uint8)
	return str
}


function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}
