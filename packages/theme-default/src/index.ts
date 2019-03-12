import { shades } from './colors'

export const base = {
	white: '#ffffff',
	black: '#212121',
	neutral: '#425A70',
	green: '#47B881',
	yellow: '#F7D154',
	red: '#EC4C47',
	blue: '#1070CA',
	purple: '#735DD0',
	orange: '#D9822B',
}

export const palette = {
	// main
	primary: base.blue,
	accent: base.purple,

	// shades
	gray: shades([base.white, base.black]),
	neutral: shades(base.neutral),

	// // feedback
	// success: '',
	// warning: '',
	// error: '',
	// info: '',

	// // typo
	// text: '',
	// heading: '',
	// subtle: '',
	// link: '',

	// // general
	// border: '',
	// bg: '',
}

export default { palette }
