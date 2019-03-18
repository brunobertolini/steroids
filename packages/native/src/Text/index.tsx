import { Text as BaseText, TextProps as BaseTextProps } from 'react-native'
import styled from 'styled-components'

export type TextProps = BaseTextProps
export const Text = styled(BaseText)<TextProps>``
