import path from 'path'
import adapter from '@sveltejs/adapter-auto'
import P69Svelte from './lib/index.js'

export default {
	kit: {
		adapter: adapter(),
		alias: {
			//$routes: path.resolve('./src/routes'),
		},
	},
	preprocess: [
		P69Svelte(path.resolve('./src/tokens.js')), //
	],
}
