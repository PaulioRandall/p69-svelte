![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p69-svelte)](https://github.com/PaulioRandall/p69-svelte/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p69-svelte)](https://github.com/PaulioRandall/p69-svelte/releases)

# P69 Svelte

Svelte preprocessor for **P69**.

- **P69**: https://github.com/PaulioRandall/p69
- **P69 Files**: https://github.com/PaulioRandall/p69-files
- **P69 Svelte**: https://github.com/PaulioRandall/p69-svelte
- **P69 Util**: https://github.com/PaulioRandall/p69-util

## Contents

- [Example](#example)
- [Options](#options)

## Example

**svelte.config.js**

```js
import P69 from 'p69'
import tokens from './src/tokens.js'

// [Optional]
// Compile .p69 files into a .css file.
// ./src/**/*.p69 => ./src/app.css
if (process.env.NODE_ENV === 'development') {
	P69.watch(tokens)
} else {
	await P69.file(tokens)
}

export default {
	...,
	preprocess: [P69.svelte(tokens)],
	...,
}
```

**src/tokens.js**

```js
export default {
	color: {
		bg: `rgb(40, 40, 40)`,
		text: `rgb(250, 250, 250)`,
		strong: `rgb(30, 85, 175)`,
	},
	font: {
		size: {
			sm: '0.8rem',
			md: '1rem',
			lg: '1.2rem',
			xl: '1.5rem',
		},
		family: {
			verdana: ['Verdana', 'sans-serif', 'Helvetica'],
			helvetica: ['Helvetica', 'Verdana', 'sans-serif'],
		},
	},
	space: {
		sm: '1rem',
		md: '2rem',
		lg: '4rem',
		xl: '8rem',
	},
	media: {
		small_screen: 'max-width: 719px',
		not_small_screen: 'min-width: 720px',
	},
}
```

**src/routes/+page.svelte**

```html
<main>
	<h1>A title</h1>

	<section>
		<h2>A heading</h2>
		<p>A paragraph...</p>
	</section>
</main>

<style>
	main {
		color: $color.text;
		font-size: $font.size.md;
		font-family: $font.family.verdana;

		padding: $space.sm;
		background-color: $color.bg;
	}

	h1 {
		color: $color.strong;
		font-size: $font.size.xl;
	}

	section {
		padding-bottom: $space.md;
	}

	@media ($media.not_small_screen) {
		section {
			padding-bottom: $space.lg;
		}
	}
</style>
```

**src/routes/+page.svelte** (after compiling)

```html
<main>
	<h1>A title</h1>

	<section>
		<h2>A heading</h2>
		<p>A paragraph...</p>
	</section>
</main>

<style>
	main {
		color: rgb(250, 250, 250);
		font-size: 1rem;
		font-family: Verdana, sans-serif, Helvetica;

		padding: 1rem;
		background-color: rgb(40, 40, 40);
	}

	h1 {
		color: rgb(30, 85, 175);
		font-size: 1.5rem;
	}

	section {
		padding-bottom: 2rem;
	}

	@media ($media.not_small_screen) {
		section {
			padding-bottom: 4rem;
		}
	}
</style>
```

[^Back to contents](#contents)

## Options

```js
P69.svelte(tokens, {
	// onError is called when an error occurs.
	//
	// If the error isn't thrown then processing will
	// continue for the remaining tokens.
	onError: (err, token) => {
		// By default, logs the error and carries on.
	},

	// If a style tag's lang attibute value is in
	// this list then it will be compiled as P69.
	//
	// 'undefined' means no lang attribute set.
	langs: [undefined, 'p69', 'text/p69'],
})
```

[^Back to contents](#contents)
