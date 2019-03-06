import { css } from 'styled-components'
import { prop as get, path, split } from 'ramda'

const resolve = (value: any) => (props: any): any => {
	const result = typeof value === 'function' ? value(props) : value

	if (Array.isArray(result)) {
		return result.map(v => resolve(v)(props))
	}

	return result
}

const parser = (callback: any, value: any) => (props: any) => {
	const result = resolve(value)(props)
	return Array.isArray(result) ? result.map(callback) : callback(result)
}

export const set = (name: string, value: any) => css`
	${name}: ${value};
`

export const responsive = (
	name: string,
	values: any,
	callback: (p: any) => any
) => (props: any) =>
	[...(props.theme.breackpoints || [0])].map(
		(size, index) =>
			values[index] &&
			css`
				@media (min-width: ${size}) {
					${callback(values[index])}
				}
			`
	)

export const to = (name: string, value: any) => (props: any) => {
	const result = resolve(value)(props)
	return Array.isArray(result)
		? responsive(name, result, value => set(name, value))
		: set(name, result)
}

export const from = (prop: string, callback?: any) =>
	callback ? parser(callback, get(prop)) : get(prop)

export const alias = (prop: string, name?: string, value?: any) =>
	to(name || prop, value || from(prop))

export const value = (prop: string, val: any) => alias(prop, prop, val)

export const bool = (prop: string, trueStyles: any, falseStyles: any) => (
	props: any
) => (props[prop] ? trueStyles : falseStyles)

export const map = (prop: string, map: any, fallback: any) => (props: any) =>
	map[from(prop)(props)] || fallback

export const theme = (crumb: string, prop: string, fallback: any) => (
	props: any
) =>
	path([...split('.', crumb), resolve(value)(props)], props.theme) ||
	fallback ||
	value
