import P69 from '@paulio/p69-files'

export default (tokenMaps, options = {}) => {
	const {
		langs = [undefined, 'p69', 'text/p69'], //
	} = options

	return {
		name: 'P69',
		style: async ({ attributes, content, filename }) => {
			if (!langs.includes(attributes.lang)) {
				return
			}

			const code = await P69.string(tokenMaps, content, {
				//ref: filename,
			})

			return { code }
		},
	}
}
