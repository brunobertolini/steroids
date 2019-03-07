import { css } from 'styled-components'
import { to, theme, from, alias, bool, slug } from './by'
import * as props from './props'

export const withColor = to('color', theme('colors', from('color')))

export const withText = css`
	${withColor}
	${props.font}
	${props.fontFamily}
	${props.fontSize}
	${props.fontStyle}
	${props.fontVariant}
	${props.fontWeight}
	${props.textAlign}
	${props.textDecoration}
	${props.textOverflow}
	${props.textShadow}
	${props.textTransform}
	${bool('uppercase', 'text-transform: uppercase;')}
`

// SPACE -----------------------------------------------------------------------

export const withPadding = css`
	${props.padding}
	${props.paddingX}
	${props.paddingX}
	${props.paddingY}
	${props.paddingY}
	${props.paddingLeft}
	${props.paddingRight}
	${props.paddingBottom}
	${props.paddingTop}
`

export const withMargin = css`
	${props.margin}
	${props.marginX}
	${props.marginX}
	${props.marginY}
	${props.marginY}
	${props.marginLeft}
	${props.marginRight}
	${props.marginBottom}
	${props.marginTop}
`

export const withShortPadding = css`
	${alias('p', 'padding')}
	${alias('px', 'padding-left')}
	${alias('px', 'padding-right')}
	${alias('py', 'padding-top')}
	${alias('py', 'padding-bottom')}
	${alias('pl', 'padding-left')}
	${alias('pr', 'padding-right')}
	${alias('pb', 'padding-bottom')}
	${alias('pt', 'padding-top')}
`

export const withShortMargin = css`
	${alias('m', 'margin')}
	${alias('mx', 'margin-left')}
	${alias('mx', 'margin-right')}
	${alias('my', 'margin-top')}
	${alias('my', 'margin-bottom')}
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
	${props.flex}
	${props.flexBasis}
	${props.flexDirection}w
	${props.flexFlow}
	${props.flexGrow}
	${props.flexShrink}
	${props.flexWrap}
`

// BACKGROUND ------------------------------------------------------------------

export const withBackground = css`
	${to('background', theme('colors', from('background')))}
	${to('background', theme('colors', from('bg')))}
`

// BORDER ----------------------------------------------------------------------

export const withBorder = css`
	${alias('border')}
	${slug('borderColor')}
`
