import { css } from 'styled-components'
import decamelize from 'decamelize'
import { to, theme, from, alias } from './by'

const slug = (prop: string) => alias(prop, decamelize(prop, '-'))

export const withColor = (props: any) =>
	to('color', theme('colors', 'color', from('color')))

export const withText = (props: any) => css`
	${withColor}
	${slug('textDecoration')}
	${slug('textTransform')}
	${slug('fontSize')}
	${slug('fontFamily')}
`

// SPACE -----------------------------------------------------------------------

export const withPadding = (props: any) => css`
	${alias('padding')}
	${slug('paddingLeft')}
	${slug('paddingRight')}
	${slug('paddingBottom')}
	${slug('paddingTop')}
`

export const withShortPadding = (props: any) => css`
	${alias('p', 'padding')}
	${alias('pl', 'padding-left')}
	${alias('pr', 'padding-right')}
	${alias('pb', 'padding-bottom')}
	${alias('pt', 'padding-top')}
`

export const withMargin = (props: any) => css`
	${alias('margin')}
	${slug('marginLeft')}
	${slug('marginRight')}
	${slug('marginBottom')}
	${slug('marginTop')}
`
export const withShortMargin = (props: any) => css`
	${alias('m', 'margin')}
	${alias('ml', 'margin-left')}
	${alias('mr', 'margin-right')}
	${alias('mb', 'margin-bottom')}
	${alias('mt', 'margin-top')}
`

export const withSpace = (props: any) => css`
	${withPadding}
	${withMargin}
`

export const withShortSpace = (props: any) => css`
	${withShortPadding}
	${withShortMargin}
`

// FLEX ------------------------------------------------------------------------

export const withFlex = (props: any) => css`
	${alias('flex')}
`

// BACKGROUND ------------------------------------------------------------------

export const withBackground = (props: any) => css`
	${alias('background')}
	${alias('bg', 'background')}
`
