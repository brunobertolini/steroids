export type GlobalStyleProps = 'inherit' | 'initial' | 'unset'

export type DisplayProps =
	| 'inline'
	| 'block'
	| 'contents'
	| 'flex'
	| 'grid'
	| 'inline-block'
	| 'inline-flex'
	| 'inline-grid'
	| 'inline-table'
	| 'list-item'
	| 'run-in'
	| 'table'
	| 'table-caption'
	| 'table-column-group'
	| 'table-header-group'
	| 'table-footer-group'
	| 'table-row-group'
	| 'table-cell'
	| 'table-column'
	| 'table-row'
	| 'none'
	| 'initial'
	| 'inherit'

// FLEX ------------------------------------------------------------------------

export type FlexWrapProps = 'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexDirectionProps =
	| GlobalStyleProps
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse'

export type AlignItemsProps =
	| 'normal'
	| 'stretch'
	| 'center'
	| 'start'
	| 'end'
	| 'flex-start'
	| 'flex-end'
	| 'self-start'
	| 'self-end'
	| 'left'
	| 'right'
	| 'baseline'
	| 'first baseline'
	| 'last baseline'
	| 'safe center'
	| 'unsafe center'

export type JustifyContentProps =
	| 'center'
	| 'start'
	| 'end'
	| 'flex-start'
	| 'flex-end'
	| 'left'
	| 'right'
	| 'baseline'
	| 'first baseline'
	| 'last baseline'
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'stretch'
	| 'safe center'
	| 'unsafe center'

export type PositionProps =
	| 'absolute'
	| 'relative'
	| 'fixed'
	| 'static'
	| 'sticky'

export type AlignSelfProps =
	| 'auto'
	| 'normal'
	| 'center'
	| 'start'
	| 'end'
	| 'self-start'
	| 'self-end'
	| 'flex-start'
	| 'flex-end'
	| 'left'
	| 'right'
	| 'baseline'
	| 'first baseline'
	| 'last baseline'
	| 'stretch'
	| 'safe center'
	| 'unsafe center'

// SPACE -----------------------------------------------------------------------

export interface ShortMarginProps {
	m?: string | number
	mx?: string | number
	my?: string | number
	ml?: string | number
	mr?: string | number
	mb?: string | number
	mt?: string | number
}

export interface ShortPaddingProps {
	p?: string | number
	px?: string | number
	py?: string | number
	pl?: string | number
	pr?: string | number
	pb?: string | number
	pt?: string | number
}

export interface MarginProps {
	margin?: string | number
	marginX?: string | number
	marginY?: string | number
	marginLeft?: string | number
	marginRight?: string | number
	marginBottom?: string | number
	marginTop?: string | number
}

export interface PaddingProps {
	padding?: string | number
	paddingX?: string | number
	paddingY?: string | number
	paddingLeft?: string | number
	paddingRight?: string | number
	paddingBottom?: string | number
	paddingTop?: string | number
}

export type SpaceProps = MarginProps & PaddingProps
export type ShortSpaceProps = ShortMarginProps & ShortPaddingProps

// BACKGROUND ------------------------------------------------------------------

export interface BackgroundProps {
	background?: string
	bg?: string
}
