import styled from 'styled-components'

import {
	Platform,
	TouchableNativeFeedback,
	TouchableNativeFeedbackProps,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'

const Touchable =
	Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity

type TouchableProps = TouchableNativeFeedbackProps & TouchableOpacityProps

export type ButtonProps = TouchableProps
export const Button = styled(Touchable)<ButtonProps>``
