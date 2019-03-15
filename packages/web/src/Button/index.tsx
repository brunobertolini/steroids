import styled, { css } from 'styled-components'

import {
	types as t,
	withSpace,
	withShortSpace,
	colors,
	to,
	prop,
	paletteBy,
	switchProp,
	withProp,
} from '@steroids/styled'

const kinds = {
	normal: css`
		${to('background-color', paletteBy('bg'))}
		${to('color', withProp(paletteBy('color'), colors.contrast))}
	`,

	outline: css`
		${to('border-color', paletteBy('borderColor'))}
		${to('border-style', prop('borderStyle', 'solid'))};
		${to('border-width', prop('borderWidth', '1px'))};
		${to('color', paletteBy('color'))}
	`,

	minimal: css`
		${to('color', paletteBy('color'))}
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
	radius?: 'round' | 'circle' | 'square' | string
	kind?: 'normal' | 'outline' | 'minimal'
	palette?: string
}

export type ButtonProps = t.SpaceProps & ButtonCustomProps

export const Button = styled.button<ButtonProps>`
	background-color: transparent;
	border: none;

	${to('border-radius', prop('radius'))}

	${switchProp('kind', kinds)}
	${switchProp('size', sizes)}

	${withSpace}
	${withShortSpace}
`

Button.defaultProps = {
	radius: '0.25rem',
	kind: 'normal',
	size: 'medium',
}
