import chroma from 'chroma-js'
import { darken, lighten } from 'polished'

export const contrast = (color: string) =>
	chroma.contrast(color, 'black') > 4.5 ? darken(1, color) : lighten(1, color)
