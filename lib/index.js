import P69 from '@paulio/p69'
import P69Files from '@paulio/p69/files'
import readTokenFiles from '@paulio/p69/files/readTokenFiles'
import prepOptions from './prepOptions.js'

export default (tokenFiles, userOptions = {}) => {
	const options = prepOptions(userOptions)
	let tokenMaps = []

	readTokenFiles(tokenFiles) //
		.then((maps) => (tokenMaps = maps))

	P69Files(tokenFiles, {
		watch: options.watch,
		onTokenFileUpdate: (file, fileMappings, allMappings) => {
			tokenMaps = allMappings
		},
	})

	return {
		name: 'p69-svelte',
		style: ({ attributes, content, filename }) => {
			if (!options.langs.includes(attributes.lang)) {
				return
			}

			const code = P69(tokenMaps, content, {
				...options,
			})

			return { code }
		},
	}
}
