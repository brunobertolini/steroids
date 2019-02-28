import { value, theme, get } from './by'

export const withColor = (props: any) =>
	value('color', theme('colors', 'color', get('color')))
