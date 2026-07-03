import P69 from '@paulio/p69'
import P69Files from '@paulio/p69/files'
import readP69TokenFiles from '@paulio/p69/files/readTokenFiles'
import prepOptions from './prepOptions.js'

export default (tokenFiles, userOptions = {}) => {
	const options = prepOptions(userOptions)

	P69Files(tokenFiles, {
		watch: options.watch, //
	})

	return {
		name: 'P69 Svelte',
		style: async ({ attributes, content, filename }) => {
			if (!options.langs.includes(attributes.lang)) {
				return
			}

			const code = await P69(tokenFiles, content, {
				...options,
				//ref: filename, // TODO
			})

			return { code }
		},
	}
}
