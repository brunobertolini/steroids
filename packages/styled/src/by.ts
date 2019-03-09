import { css } from 'styled-components'
import { prop, palette, ifProp, withProp, switchProp } from 'styled-tools'
import decamelize from 'decamelize'

const resolve = (value: any) => (props: any): any => {
	const result = typeof value === 'function' ? value(props) : value

	if (Array.isArray(result)) {
		return result.map(v => resolve(v)(props))
	}

	return result
}

export const set = (name: string, value: any) =>
	css`
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

export const to = (name: string, value: any) => (props: object) => {
	const result = resolve(value)(props)

	return Array.isArray(result)
		? responsive(name, result, value => set(name, value))
		: set(name, result)
}

export const alias = (key: string, name?: string, fallback?: any) =>
	to(name || key, prop(key, fallback))

export const slug = (key: string, fallback?: any) =>
	alias(key, decamelize(key, '-'), fallback)

export const theme = (path: string, index: any, fallback?: any) => (
	props: object
) => {
	const value = resolve(index)(props)

	return Array.isArray(value)
		? value.map(v => prop(`${path}.${v}`, fallback || v))
		: prop(`theme.${path}.${value}`, fallback || value)(props)
}

export { prop, palette, ifProp, withProp, switchProp }
