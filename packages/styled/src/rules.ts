import { css } from 'styled-components'
import { value, theme, get, alias } from './by'

export const withColor = (props: any) =>
	value('color', theme('colors', 'color', get('color')))

export const withText = (props: any) => css`
	${withColor}
	${alias('textDecoration', 'text-decoration')}
	${alias('textTransform', 'text-transform')}
	${alias('fontSize', 'font-size')}
	${alias('fontFamily', 'font-family')}
`

export const withPadding = (props: any) => css`
	${alias('padding')}
	${alias('paddingLeft')}
	${alias('paddingRight')}
	${alias('paddingBottom')}
	${alias('paddingTop')}
	${alias('p', 'padding')}
	${alias('pl', 'paddingLeft')}
	${alias('pr', 'paddingRight')}
	${alias('pb', 'paddingBottom')}
	${alias('pt', 'paddingTop')}
`

export const withMargin = (props: any) => css`
	${alias('margin')}
	${alias('marginLeft')}
	${alias('marginRight')}
	${alias('marginBottom')}
	${alias('marginTop')}
	${alias('m', 'margin')}
	${alias('ml', 'marginLeft')}
	${alias('mr', 'marginRight')}
	${alias('mb', 'marginBottom')}
	${alias('mt', 'marginTop')}
`

export const withSpace = (props: any) => css`
	${withPadding}
	${withMargin}
`

export const withFlex = (props: any) => css`
	${alias('flex')}
`
