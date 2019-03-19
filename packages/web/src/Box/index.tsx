import styled from 'styled-components'

import {
	types as t,
	withBackground,
	withBorder,
	withFlex,
	withGrid,
	withMargin,
	withPadding,
	withPosition,
	withScroll,
	withSize,
	withText,
	withTransform,
	withShortSpace,
	withOthers,
} from '@steroids/styled'

export type BoxProps = t.BackgroundProps &
	t.BorderProps &
	t.FlexProps &
	t.GridProps &
	t.MarginProps &
	t.PaddingProps &
	t.PositionProps &
	t.ScrollProps &
	t.SizeProps &
	t.TextProps &
	t.TransformProps &
	t.ShortSpaceProps &
	t.OthersProps

export const Box = styled.div<BoxProps>`
	${withBackground}
	${withBorder}
	${withFlex}
	${withGrid}
	${withMargin}
	${withPadding}
	${withPosition}
	${withScroll}
	${withSize}
	${withText}
	${withTransform}
	${withShortSpace}
	${withOthers}
`
