import * as React from 'react'
import { Text as BaseText, TextProps as BaseTextProps } from 'react-native'
import styled from 'styled-components'
import { types as t, withText } from '@steroids/styled'

export type TextProps = BaseTextProps & t.TextProps

export const Text: React.SFC<TextProps> = styled(BaseText)`
	${withText}
`

Text.defaultProps = {
	uppercase: false,
}
