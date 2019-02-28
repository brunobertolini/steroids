import { css } from 'styled-components'
import { path, split } from 'ramda'

const breackpoints = (name: string, values: []) => (props: any) =>
	props.theme.breackpoints.map(
		(size: number | string, index: number) => css`
			@media (min-width: ${size}) {
				${name}: ${values[index]};
			}
		`
	)

export const get = (prop: string) => (props: any) => props[prop]

export const to = (name: string, value: any) => (props: any) => {
	const result = typeof value === 'function' ? value(props) : value

	if (!result) {
		return
	}

	return typeof result === 'string'
		? css`
				${name}: ${result};
		  `
		: css`
				${breackpoints(name, result)}
		  `
}

export const alias = (prop: string, name: string, value: any) =>
	to(name || prop, value || get(prop))

export const value = (prop: string, val: any) => alias(prop, prop, val)

export const bool = (prop: string, trueStyles: any, falseStyles: any) => (
	props: any
) => (props[prop] ? trueStyles : falseStyles)

export const map = (prop: string, map: any, fallback: any) => (props: any) =>
	props[prop] && map[props[prop]] ? map[props[prop]] : fallback

export const theme = (crumb: string, prop: string, fallback: any) => (
	props: any
) =>
	(props[prop] && path([...split('.', crumb), props[prop]], props.theme)) ||
	css`
		${fallback}
	`
