/**
 * @module arraybuffer-to-string
 */

'use strict'

module.exports = function ArrayBufferToString (buffer, encoding) {
	if (encoding == null) encoding = 'utf8'

	return Buffer.from(buffer).toString(encoding)
}
