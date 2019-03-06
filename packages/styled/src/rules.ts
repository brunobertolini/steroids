import { css } from 'styled-components'
import decamelize from 'decamelize'
import { to, theme, from, alias } from './by'

const slug = (prop: string) => alias(prop, decamelize(prop, '-'))

export const withColor = to('color', theme('colors', 'color', from('color')))

export const withText = css`
	${withColor}
	${slug('textDecoration')}
	${slug('textTransform')}
	${slug('fontSize')}
	${slug('fontFamily')}
`

// SPACE -----------------------------------------------------------------------

export const withPadding = css`
	${alias('padding')}
	${slug('paddingLeft')}
	${slug('paddingRight')}
	${slug('paddingBottom')}
	${slug('paddingTop')}
`

export const withShortPadding = css`
	${alias('p', 'padding')}
	${alias('pl', 'padding-left')}
	${alias('pr', 'padding-right')}
	${alias('pb', 'padding-bottom')}
	${alias('pt', 'padding-top')}
`

export const withMargin = css`
	${alias('margin')}
	${slug('marginLeft')}
	${slug('marginRight')}
	${slug('marginBottom')}
	${slug('marginTop')}
`
export const withShortMargin = css`
	${alias('m', 'margin')}
	${alias('ml', 'margin-left')}
	${alias('mr', 'margin-right')}
	${alias('mb', 'margin-bottom')}
	${alias('mt', 'margin-top')}
`

export const withSpace = css`
	${withPadding}
	${withMargin}
`

export const withShortSpace = css`
	${withShortPadding}
	${withShortMargin}
`

// FLEX ------------------------------------------------------------------------

export const withFlex = css`
	${alias('flex')}
`

// BACKGROUND ------------------------------------------------------------------

export const withBackground = css`
	${alias('background')}
	${alias('bg', 'background')}
`
