export type GlobalStyleProps = 'inherit' | 'initial' | 'unset'

// TEXT ------------------------------------------------------------------------

export interface TextProps {
	color?: string
	font?: any
	fontFamily?: any
	fontSize?: any
	fontStyle?: any
	fontVariant?: any
	fontWeight?: any
	letterSpacing?: any
	lineHeight?: any
	textAlign?: any
	textDecoration?: any
	textOverflow?: any
	textShadow?: any
	textTransform?: any
	userSelect?: any
	uppercase?: boolean
	wordBreak?: any
	wordWrap?: any
}

// SPACE -----------------------------------------------------------------------

export interface PaddingProps {
	padding?: number | string
	paddingX?: number | string
	paddingY?: number | string
	paddingLeft?: number | string
	paddingRight?: number | string
	paddingBottom?: number | string
	paddingTop?: number | string
}

export interface MarginProps {
	margin?: number | string
	marginX?: number | string
	marginY?: number | string
	marginLeft?: number | string
	marginRight?: number | string
	marginBottom?: number | string
	marginTop?: number | string
}

export interface ShortPaddingProps {
	padding?: number | string
	paddingLeft?: number | string
	paddingRight?: number | string
	paddingTop?: number | string
	paddingBottom?: number | string
}

export interface ShortMarginProps {
	margin?: number | string
	marginLeft?: number | string
	marginRight?: number | string
	marginTop?: number | string
	marginBottom?: number | string
}

export type SpaceProps = PaddingProps & MarginProps
export type ShortSpaceProps = ShortPaddingProps & ShortMarginProps

// FLEX ------------------------------------------------------------------------

export type FlexWrapProp = 'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexDirectionProp =
	| GlobalStyleProps
	| 'row'
	| 'row-reverse'
	| 'column'
	| 'column-reverse'

export type AlignItemsProp =
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

export type JustifyContentProp =
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

export type AlignSelfProp =
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

export interface FlexProps {
	alignContent?: any
	alignItems?: AlignItemsProp
	alignSelf?: AlignSelfProp
	flex?: number | GlobalStyleProps
	flexBasis?: any
	flexDirection?: FlexDirectionProp
	flexFlow?: any
	flexGrow?: any
	flexShrink?: any
	flexWrap?: FlexWrapProp
	justifyContent?: JustifyContentProp
	justifyItems?: any
	justifySelf?: any
	placeContent?: any
	placeItems?: any
	placeSelf?: any
}

// BACKGROUND ------------------------------------------------------------------

export interface BackgroundProps {
	background?: string
	backgroundBlendMode?: any
	backgroundClip?: any
	backgroundColor?: any
	backgroundImage?: any
	backgroundOrigin?: any
	backgroundPosition?: any
	backgroundRepeat?: any
	backgroundSize?: any
}

// BORDER ----------------------------------------------------------------------

export interface BorderProps {
	border?: any
	borderBottom?: any
	borderBottomColor?: any
	borderBottomLeftRadius?: any
	borderBottomRightRadius?: any
	borderBottomStyle?: any
	borderBottomWidth?: any
	borderColor?: any
	borderLeft?: any
	borderLeftColor?: any
	borderLeftStyle?: any
	borderLeftWidth?: any
	borderRadius?: any
	borderRight?: any
	borderRightColor?: any
	borderRightStyle?: any
	borderRightWidth?: any
	borderStyle?: any
	borderTop?: any
	borderTopColor?: any
	borderTopLeftRadius?: any
	borderTopRightRadius?: any
	borderTopStyle?: any
	borderTopWidth?: any
	borderWidth?: any
}
// GRID -----------------------------------------------------------------------

export interface GridProps {
	columnGap?: any
	gap?: any
	grid?: any
	gridArea?: any
	gridAutoColumns?: any
	gridAutoFlow?: any
	gridAutoRows?: any
	gridColumn?: any
	gridColumnEnd?: any
	gridColumnGap?: any
	gridColumnStart?: any
	gridGap?: any
	gridRow?: any
	gridRowEnd?: any
	gridRowGap?: any
	gridRowStart?: any
	gridTemplate?: any
	gridTemplateAreas?: any
	gridTemplateColumns?: any
	gridTemplateRows?: any
	rowGap?: any
}

// ANIMATION -------------------------------------------------------------------

export interface TransformProps {
	transform?: any
	transformOrigin?: any
	transition?: any
	transitionDelay?: any
	transitionDuration?: any
	transitionProperty?: any
	transitionTimingFunction?: any
}

// SIZE ------------------------------------------------------------------------

export interface SizeProps {
	height?: any
	maxHeight?: any
	maxWidth?: any
	minHeight?: any
	minWidth?: any
	width?: any
}

// POSITION --------------------------------------------------------------------

export type PositionProp =
	| 'absolute'
	| 'relative'
	| 'fixed'
	| 'static'
	| 'sticky'

export interface PositionProps {
	bottom?: any
	left?: any
	float?: any
	position?: PositionProp
	right?: any
	top?: any
	zIndex?: any
}

// SCROLL ----------------------------------------------------------------------

export interface ScrollProps {
	overflow?: any
	overflowX?: any
	overflowY?: any
}

// OTHERS ----------------------------------------------------------------------

export type DisplayProp =
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

export interface OthersProps {
	boxShadow?: any
	boxSizing?: any
	clear?: any
	cursor?: any
	display?: DisplayProp
	listStyle?: any
	listStyleImage?: any
	listStylePosition?: any
	listStyleType?: any
	opacity?: any
	order?: any
	pointerEvents?: any
	visibility?: any
	whiteSpace?: any
}

// ALL -------------------------------------------------------------------------

export type AllProps = BackgroundProps &
	BorderProps &
	FlexProps &
	GridProps &
	MarginProps &
	OthersProps &
	PaddingProps &
	PositionProps &
	ScrollProps &
	SizeProps &
	TextProps &
	TransformProps &
	ShortSpaceProps
