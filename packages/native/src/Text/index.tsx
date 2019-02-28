import * as React from 'react'
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native'
import styled, { css } from 'styled-components'

interface TextCustomProps {
	uppercase: boolean
}

const value = (name, prop) => props =>
	props[name] &&
	css`
		${prop}
	`

export type TextProps = BaseTextProps & TextCustomProps

const TextStyled = styled(BaseText)<TextProps>`
	${value('uppercase', 'text-transform: uppercase;')}
`

export const Text: React.SFC<TextProps> = ({ children, ...props }) => (
	<TextStyled {...props}>{children}</TextStyled>
)

Text.defaultProps = {
	uppercase: false,
}
