import P69 from '@paulio/p69'
import P69Files from '@paulio/p69/files'
import readTokenFiles from '@paulio/p69/files/readTokenFiles'
import prepOptions from './prepOptions.js'

export default async (tokenFiles, userOptions = {}) => {
	const options = prepOptions(userOptions)
	const tokenMaps = await readTokenFiles(tokenFiles)

	// TODO: Update P69 with to watch for changes to token
	//       files and reimports them if 'options.watch' is
	//       true. It will need to hot update if possible.
	//       Failing that use the using query parameter
	//       exploit noting that changes to imported files
	//       will not be reflected.
	// TODO: Then add 'options.onTokenFileUpdate' that
	//       notifies the user when a token file is changed.
	//       It needs to pass the file that changed, the
	//       new mappings loaded from it, and an updated list
	//       of all mappings, i.e:
	//       'onTokenFileUpdate(file, mapping, allMappings)'.
	// TODO: Once P69 is republished, update this file to
	//       use 'options.onTokenFileUpdate'

	P69Files(tokenFiles, {
		watch: options.watch, //
	})

	return {
		name: 'P69 Svelte',
		style: async ({ attributes, content, filename }) => {
			if (!options.langs.includes(attributes.lang)) {
				return
			}

			const code = await P69(tokenMaps, content, {
				...options,
				//ref: filename, // TODO
			})

			return { code }
		},
	}
}
