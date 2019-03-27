import * as React from 'react'
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components'
import theme from '@steroids/theme-default'
import { Box } from '@steroids/components'

export const App = () => (
	<ThemeProvider theme={theme}>
		<Box p={20} bg="green">
			<Text color="white">Welcome Steroids</Text>
		</Box>
	</ThemeProvider>
)
