import * as React from 'react'
import { View, ViewProps } from 'react-native'
import styled from 'styled-components'
import { types as t, withAll } from '@steroids/styled'

export type BoxProps = ViewProps & t.AllProps

export const Box: React.SFC<BoxProps> = styled(View)`
	${withAll}
`
