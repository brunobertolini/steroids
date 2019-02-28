import * as React from 'react'
import { useMemo } from 'react'

export interface LazyProps {
	from: () => Promise<any>
	fallback: React.SFC<any>
}

export const Lazy: React.SFC<LazyProps> = ({ from, fallback, ...props }) => {
	const Component = useMemo(() => React.lazy(from), [from])

	return (
		<React.Suspense fallback={fallback}>
			<Component {...props} />
		</React.Suspense>
	)
}
