import { css } from 'styled-components'
import decamelize from 'decamelize'
import { switchProp, ifProp } from 'styled-tools'
import { path, split } from 'ramda'

const set = (name: string, value: any) => css`
	${name}: ${value};
`

export const responsive = (
	values: any[],
	callback: (v: any, s: string) => string
) => (props: any) =>
	[...(props.theme.breackpoints || [0])].map(
		(size: string, index: number) =>
			values[index] &&
			css`
				@media (min-width: ${size}) {
					${callback(values[index], size)}
				}
			`
	)

export const prop = (key: string, defaultValue?: any) => (props: object) => {
	const value = path(split('.', key), props)

	if (value === undefined && defaultValue !== undefined) {
		return typeof defaultValue === 'function'
			? defaultValue(props)
			: defaultValue
	}

	return value
}

export const withProp = (key: any, callback: any) => (props: object) => {
	const value = typeof key === 'string' ? prop(key)(props) : key(props)

	if (value === undefined) {
		return
	}

	return Array.isArray(value) ? value.map(callback) : callback(value)
}

export const to = (name: string, value: any) => (props: object) => {
	const result = typeof value === 'string' ? prop(value)(props) : value(props)

	if (result === undefined) {
		return
	}

	return Array.isArray(result)
		? responsive(result, (v: any, size?: string): any => set(name, value))
		: set(name, result)
}

export const alias = (key: string, name?: string) =>
	to(name || decamelize(key, '-'), prop(key))

export const palette = (key: any, tone?: number) => (props: object): any => {
	const value = typeof key === 'string' ? key : key(props)

	if (Array.isArray(value)) {
		return value.map(v => palette(v)(props))
	}

	const result = prop(`theme.palette.${value}`, value)(props)

	return Array.isArray(result) ? result[prop('tone', tone || 0)(props)] : result
}

export const paletteBy = (key: string) =>
	palette(prop(key, prop('palette', 'primary')))

export { switchProp, ifProp }
