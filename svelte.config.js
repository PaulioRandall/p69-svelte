import adapter from '@sveltejs/adapter-auto'
import path from 'path'

import P69 from '@paulio/p69-files'
import tokens from './src/tokens.js'

if (process.env.NODE_ENV === 'development') {
	P69.watch(tokens)
} else {
	await P69.files(tokens)
}

export default {
	kit: {
		adapter: adapter(),
		alias: {
			//$routes: path.resolve('./src/routes'),
		},
	},
	// preprocess: [],
}
