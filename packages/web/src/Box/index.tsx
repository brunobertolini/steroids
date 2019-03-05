import * as React from 'react'

export const Box: React.SFC<any> = ({ children, ...props }) => (
	<div {...props}>{children}</div>
)
