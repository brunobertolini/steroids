import * as React from 'react'
import { omit, pick } from 'ramda'

export interface PackerProps {
	container: React.SFC<any>
	containerProps: string[]
	sharedProps: string[]
	fixedProps: object
}

export const Packer: React.SFC<PackerProps> = ({
	container: Container,
	containerProps,
	sharedProps,
	fixedProps,
	children,
}) => (
	<>
		{React.Children.toArray(children)
			.filter(React.isValidElement)
			.map((child: any, idx: number) =>
				child.type && child.type.name && child.type.name === Container.name ? (
					child
				) : (
					<Container
						{...fixedProps}
						{...pick([...containerProps, ...sharedProps], child.props)}
						key={idx}
					>
						{{ ...child, props: omit(containerProps, child.props) }}
					</Container>
				)
			)}
	</>
)

Packer.defaultProps = {
	containerProps: [],
	sharedProps: [],
	fixedProps: {},
}
