import styled, { css } from 'styled-components'

import {
	types as t,
	withSpace,
	withShortSpace,
	to,
	prop,
	slug,
	theme,
	ifProp,
	switchProp,
	withProp,
	colors,
} from '@steroids/styled'

const kinds = {
	normal: css`
		${to('background-color', theme('colors', prop('palette')))}
		color: ${(props: object) =>
			colors.contrast(theme('colors', prop('palette'))(props))};
	`,

	outline: css`
		background-color: transparent;
		${to('color', theme('colors', prop('palette')))}
	`,

	minimal: css`
		background-color: transparent;
		${to('color', theme('colors', prop('palette')))}
	`,
}

const sizes = {
	small: css`
		padding: 0.8em 2rem;
		font-size: 0.7em;
	`,

	medium: css`
		padding: 1em 2.5rem;
		font-size: 0.9em;
	`,

	large: css`
		padding: 1.2em 3rem;
		font-size: 1.1em;
	`,
}

interface ButtonCustomProps {
	size?: 'small' | 'medium' | 'large' | number
	radius?: 'round' | 'circle' | 'square' | number
	kind?: 'normal' | 'outline' | 'minimal'
	palette?: string
}

export type ButtonProps = t.SpaceProps & ButtonCustomProps

export const Button = styled.button<ButtonProps>`
	${to(
		'background-color',
		ifProp(
			{ kind: 'normal' },
			theme('colors', prop('palette', 'white')),
			'transparent'
		)
	)}

	${to(
		'border-color',
		ifProp({ kind: 'outline' }, prop('palette', 'transparent'), 'transparent')
	)};

	${slug('borderStyle', 'solid')};
	${slug('borderWidth', '1px')};
	${to('border-radius', theme('radius', prop('radius')))}

	${switchProp('kind', kinds)}
	${switchProp('size', sizes)}

	${withSpace}
	${withShortSpace}
`

Button.defaultProps = {
	kind: 'normal',
	size: 'medium',
	radius: 'round',
	palette: '#EEE',
}
