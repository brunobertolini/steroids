import { css } from 'styled-components'
import { to, theme, from, bool } from './by'
import * as props from './props'

const px = (value: string | number) =>
	Array.isArray(value) ? value.map(v => `${v}px`) : `${value}px`

const scale = (index: number) => theme('scale', index, px(index))

// TEXT ------------------------------------------------------------------------

export const withText = css`
    ${props.font}
    ${props.fontFamily}
    ${props.fontSize}
    ${props.fontStyle}
    ${props.fontVariant}
    ${props.fontWeight}
    ${props.letterSpacing}
    ${props.lineHeight}
    ${props.textAlign}
    ${props.textDecoration}
    ${props.textOverflow}
    ${props.textShadow}
    ${props.textTransform}
    ${props.userSelect}
    ${props.wordBreak}
    ${props.wordWrap}
    ${bool('uppercase', 'text-transform: uppercase;')}
    ${to('color', theme('colors', from('color')))}
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
    ${to('padding', from('p', scale))}
    ${to('padding-left', from('px', scale))}
    ${to('padding-right', from('px', scale))}
    ${to('padding-top', from('py', scale))}
    ${to('padding-bottom', from('py', scale))}
    ${to('padding-left', from('pl', scale))}
    ${to('padding-right', from('pr', scale))}
    ${to('padding-top', from('pt', scale))}
    ${to('padding-bottom', from('pb', scale))}
`

export const withShortMargin = css`
    ${to('margin', from('m', scale))}
    ${to('margin-left', from('mx', scale))}
    ${to('margin-right', from('mx', scale))}
    ${to('margin-top', from('my', scale))}
    ${to('margin-bottom', from('my', scale))}
    ${to('margin-left', from('ml', scale))}
    ${to('margin-right', from('mr', scale))}
    ${to('margin-top', from('mt', scale))}
    ${to('margin-bottom', from('mb', scale))}
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
    ${props.alignContent}
    ${props.alignItems}
    ${props.alignSelf}
    ${props.flex}
    ${props.flexBasis}
    ${props.flexDirection}
    ${props.flexFlow}
    ${props.flexGrow}
    ${props.flexShrink}
    ${props.flexWrap}
    ${props.justifyContent}
    ${props.justifyItems}
    ${props.justifySelf}
    ${props.placeContent}
    ${props.placeItems}
    ${props.placeSelf}
`

// BACKGROUND ------------------------------------------------------------------

export const withBackground = css`
    ${to('background', theme('colors', from('background')))}
    ${to('background', theme('colors', from('bg')))}
    ${props.backgroundBlendMode}
    ${props.backgroundClip}
    ${props.backgroundColor}
    ${props.backgroundImage}
    ${props.backgroundOrigin}
    ${props.backgroundPosition}
    ${props.backgroundRepeat}
    ${props.backgroundSize}
`

// BORDER ----------------------------------------------------------------------

export const withBorder = css`
    ${props.border}
    ${props.borderBottom}
    ${props.borderBottomColor}
    ${props.borderBottomLeftRadius}
    ${props.borderBottomRightRadius}
    ${props.borderBottomStyle}
    ${props.borderBottomWidth}
    ${props.borderColor}
    ${props.borderLeft}
    ${props.borderLeftColor}
    ${props.borderLeftStyle}
    ${props.borderLeftWidth}
    ${props.borderRadius}
    ${props.borderRight}
    ${props.borderRightColor}
    ${props.borderRightStyle}
    ${props.borderRightWidth}
    ${props.borderStyle}
    ${props.borderTop}
    ${props.borderTopColor}
    ${props.borderTopLeftRadius}
    ${props.borderTopRightRadius}
    ${props.borderTopStyle}
    ${props.borderTopWidth}
    ${props.borderWidth}

`
// GRID -----------------------------------------------------------------------

export const withGrid = css`
    ${props.columnGap}
    ${props.gap}
    ${props.grid}
    ${props.gridArea}
    ${props.gridAutoColumns}
    ${props.gridAutoFlow}
    ${props.gridAutoRows}
    ${props.gridColumn}
    ${props.gridColumnEnd}
    ${props.gridColumnGap}
    ${props.gridColumnStart}
    ${props.gridGap}
    ${props.gridRow}
    ${props.gridRowEnd}
    ${props.gridRowGap}
    ${props.gridRowStart}
    ${props.gridTemplate}
    ${props.gridTemplateAreas}
    ${props.gridTemplateColumns}
    ${props.gridTemplateRows}
    ${props.rowGap}
`

// ANIMATION -------------------------------------------------------------------

export const withTransform = css`
    ${props.transform}
    ${props.transformOrigin}
    ${props.transition}
    ${props.transitionDelay}
    ${props.transitionDuration}
    ${props.transitionProperty}
    ${props.transitionTimingFunction}
`

// SIZE ------------------------------------------------------------------------

export const withSize = css`
    ${props.height}
    ${props.maxHeight}
    ${props.maxWidth}
    ${props.minHeight}
    ${props.minWidth}
    ${props.width}
`

// POSITION --------------------------------------------------------------------

export const withPosition = css`
    ${props.bottom}
    ${props.left}
    ${props.float}
    ${props.position}
    ${props.right}
    ${props.top}
    ${props.zIndex}
`

// SCROLL ----------------------------------------------------------------------

export const withScroll = css`
    ${props.overflow}
    ${props.overflowX}
    ${props.overflowY}
`

// OTHERS ----------------------------------------------------------------------

export const withOthers = css`
    ${props.boxShadow}
    ${props.boxSizing}
    ${props.clear}
    ${props.cursor}
    ${props.display}
    ${props.listStyle}
    ${props.listStyleImage}
    ${props.listStylePosition}
    ${props.listStyleType}
    ${props.opacity}
    ${props.order}
    ${props.pointerEvents}
    ${props.visibility}
    ${props.whiteSpace}
`

// ALL -------------------------------------------------------------------------

export const withAll = css`
    ${withBackground}
    ${withBorder}
    ${withFlex}
    ${withGrid}
    ${withMargin}
    ${withOthers}
    ${withPadding}
    ${withPosition}
    ${withScroll}
    ${withSize}
    ${withText}
    ${withTransform}
    ${withShortSpace}
`
