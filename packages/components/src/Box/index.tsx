import styled from 'styled-components'
import { types as t, withAll } from '@steroids/styled'
import { Box as BoxBase } from '@steroids/universal'

export type BoxProps = t.AllProps

export const Box = styled(BoxBase)<BoxProps>`
	${withAll}
`
