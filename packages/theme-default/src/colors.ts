import chroma from 'chroma-js'

const isFn = (val: any) => typeof val === 'function'

const colorAction = (pred: (color: any, ratio: number) => any) => (
	color: any,
	ratio: number
) => {
	const fn = (c: any) => pred(c, ratio)
	return isFn(color) ? (props: any) => fn(color(props)) : fn(color)
}

export const alpha = colorAction((c, r) =>
	chroma(c)
		.alpha(r)
		.css('hsl')
)

export const darken = colorAction((c, r) =>
	chroma(c)
		.darken(r)
		.css('hsl')
)

export const brighten = colorAction((c, r) =>
	chroma(c)
		.brighten(r)
		.css('hsl')
)

export const saturate = colorAction((c, r) =>
	chroma(c)
		.saturate(r)
		.css('hsl')
)

export const desaturate = colorAction((c, r) =>
	chroma(c)
		.desaturate(r)
		.css('hsl')
)
export const shades = (color: string | string[], len: number = 5) =>
	chroma
		.bezier(
			Array.isArray(color)
				? color
				: [brighten(color, 1.8), color, darken(color, 1.8)]
		)
		.scale()
		.colors(len)
