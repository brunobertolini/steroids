import styled from 'styled-components'

import { types as t, withAll } from '@steroids/styled'

export type BoxProps = t.AllProps

export const Box = styled.div<BoxProps>`
	${withAll}
`
