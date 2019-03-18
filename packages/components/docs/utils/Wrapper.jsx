import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@steroids/theme-default'

const Wrapper = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Wrapper
