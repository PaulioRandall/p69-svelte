const defaultOptions = {
	langs: [undefined, 'p69', 'text/p69'],
	watch: process.env.NODE_ENV === 'development',
}

export default function (userOptions) {
	return {
		langs: getLangsOption(userOptions.langs, defaultOptions.langs),
		watch: getWatchOption(userOptions.watch, defaultOptions.watch),
	}
}

function getLangsOption(langs, defaultLangs) {
	if (isNullOrUndefined(langs)) {
		return structuredClone(defaultLangs)
	}

	if (!Array.isArray(langs)) {
		throw newError("If specified, 'options.lang' must be an array")
	}

	for (let i = 0; i < langs.length; i++) {
		if (typeof langs[i] !== 'string') {
			throw newError(`'options.lang[${i}]' must be a string`)
		}
	}

	return structuredClone(langs)
}

function getWatchOption(watch, defaultWatch) {
	if (isNullOrUndefined(watch)) {
		return defaultWatch
	}

	if (typeof watch !== 'boolean') {
		throw newError("If specified, 'options.watch' must be a bool")
	}

	return watch
}

function isNullOrUndefined(v) {
	return v === null || v === undefined
}

function newError(msg) {
	return new Error(`[P69-Svelte] ${msg}`)
}
