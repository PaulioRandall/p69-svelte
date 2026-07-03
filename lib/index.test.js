import newProcessor from './new_processor.js'

describe('svelte', () => {
	test('Integration', async () => {
		const tokenMap = {
			color: 'blue',
			shape: 'hexagon',
		}

		const processor = await newProcessor(tokenMap)

		const given = {
			content: '$color',
			attributes: { lang: 'p69' },
			filename: 'Test.svelte',
		}

		const exp = {
			code: 'blue',
		}

		const promise = processor.style(given)
		expect(promise).resolves.toEqual(exp)
	})
})
