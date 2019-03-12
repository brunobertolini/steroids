import * as React from 'react'
import styled from 'styled-components'

import { Box, BoxProps } from './../Box'

export const Field: React.SFC<BoxProps> = ({ children, ...props }) => (
	<Box {...props}>{children}</Box>
)

Field.defaultProps = {
	border: true,
}
