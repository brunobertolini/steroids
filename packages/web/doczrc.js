const IS_PROD = process.env.NODE_ENV === 'production'

export default {
	typescript: true,
	codeSandbox: true,
	sourcemaps: IS_PROD,
	propsParser: IS_PROD,
	title: 'Steroids / Web',
	menu: ['Components'],
	htmlContext: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://codemirror.net/theme/dracula.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Poppins:400,500',
				},
			],
		},
	},
	themeConfig: {
		codemirrorTheme: 'dracula',
		colors: {
			primary: '#0097e6',
		},
		styles: {
			h2: {
				margin: '60px 0 30px',
			},
			pre: {
				border: '0',
			},
			paragraph: {
				margin: '10px 0 20px 0',
			},
		},
	},
}
