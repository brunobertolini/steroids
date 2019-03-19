import { View, ViewProps } from 'react-native'
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
} from '@steroids/styled'

export type BoxProps = ViewProps &
	t.BackgroundProps &
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
	t.ShortSpaceProps

export const Box = styled(View)<BoxProps>`
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
`
