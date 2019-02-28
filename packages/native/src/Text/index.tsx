import * as React from 'react'
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native'
import styled from 'styled-components'
import { bool } from '@steroids/styled'

interface TextCustomProps {
	uppercase: boolean
}

export type TextProps = BaseTextProps & TextCustomProps

const TextStyled = styled(BaseText)<TextProps>`
	${bool('uppercase', 'text-transform: uppercase;')}
`

export const Text: React.SFC<TextProps> = ({ children, ...props }) => (
	<TextStyled {...props}>{children}</TextStyled>
)

Text.defaultProps = {
	uppercase: false,
}
