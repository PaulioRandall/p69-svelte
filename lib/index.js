import P69 from '@paulio/p69'
import P69Files from '@paulio/p69/files'
import readTokenFiles from '@paulio/p69/files/readTokenFiles'
import prepOptions from './prepOptions.js'

export default (tokenFiles, userOptions = {}) => {
	const options = prepOptions(userOptions)
	let tokenMaps = []

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
	// TODO: Update P69Files to return an object that can be
	//       used to stop watching and access the mappings.
	//       Basically, use a class as the basis for P69Files
	//       implementation.
	// TODO: Create a loadSync function to allow synched
	//       loading of token files.
	// TODO: Once P69 is republished, update this file to
	//       use 'options.onTokenFileUpdate'

	// TODO: This will no longer be needed once the above
	//       changes are made because P69Files will call
	//       'options.onTokenFileUpdate' on startup.
	readTokenFiles(tokenFiles) //
		.then((maps) => (tokenMaps = maps))

	P69Files(tokenFiles, {
		watch: options.watch,
		onTokenFileUpdate: (file, fileMappings, allMappings) => {
			tokenMaps = allMappings
		},
	})

	return {
		name: 'P69 Svelte',
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
