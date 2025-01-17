const rgbs = {
	ice_cream: [250, 250, 250],
	light_sky_purple: [210, 210, 230],
	very_light_sky_blue: [231, 245, 255],
	jet_blue: [30, 85, 175],
	dark_navy_grey: [5, 10, 60],
	very_dark_navy: [5, 10, 35],
	burly_wood: [222, 184, 135],
	rosy_red: [255, 145, 145],
	blood_red: [115, 16, 16],
	very_dark_grey: [40, 40, 40],
}

const rgbToCSS = (rgb) => `rgb(${rgb})`

export default {
	color: {
		bg: rgbToCSS(rgbs.ice_cream),
		text: rgbToCSS(rgbs.very_dark_grey),
		strong: rgbToCSS(rgbs.jet_blue),
	},
	font: {
		size: {
			// https://utopia.fyi/type/calculator?c=320,14,1.2,1600,18,1.25,6,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
			xs: 'clamp(0.60rem, calc(0.58rem + 0.09vw), 0.67rem)',
			sm: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.89rem)',
			md: 'clamp(0.94rem, calc(0.88rem + 0.31vw), 1.19rem)',
			lg: 'clamp(1.17rem, calc(1.07rem + 0.51vw), 1.58rem)',
			xl: 'clamp(1.47rem, calc(1.30rem + 0.81vw), 2.11rem)',
			'2xl': 'clamp(1.83rem, calc(1.59rem + 1.23vw), 2.81rem)',
			'3xl': 'clamp(2.29rem, calc(1.92rem + 1.83vw), 3.75rem)',
			'4xl': 'clamp(2.86rem, calc(2.33rem + 2.67vw), 5.00rem)',
			'5xl': 'clamp(3.58rem, calc(2.80rem + 3.86vw), 6.66rem)',
		},
		family: {
			verdana: ['Verdana', 'sans-serif', 'Helvetica'],
			helvetica: ['Helvetica', 'Verdana', 'sans-serif'],
		},
	},
	width: {
		min: '320px',
		xs: '600px',
		sm: '720px',
		md: '920px',
		lg: '1200px',
	},
	space: {
		xs: '0.5rem',
		sm: '1rem',
		md: '2rem',
		lg: '4rem',
		xl: '8rem',
	},
}
