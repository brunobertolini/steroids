import * as React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
	palette: {
		primary: '#F7F7F7',
	},
}

const Wrapper = ({ children, props }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Wrapper
