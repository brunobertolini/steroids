import styled from 'styled-components'

import {
	withSpace,
	SpaceProps,
	withBackground,
	BackgroundProps,
	withText,
} from '@steroids/styled'

export type BoxProps = SpaceProps & BackgroundProps

export const Box = styled.div<BoxProps>`
	${withText}
	${withSpace}
	${withBackground}
`
