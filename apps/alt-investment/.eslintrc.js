const path = require('path')

module.exports = {
	extends: [
		path.resolve(__dirname, '../../.eslintrc.json'),
		'next/core-web-vitals',
		// '@ouorz/eslint-config-next',
	],
}
