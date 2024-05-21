/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '12px',
		},
		screens: {
			sm: '375px',
			md: '720px',
			lg: '960px',
			xl: '1110px',
		},
		fontSize: {
			h1: ['30px', {
				lineHeight: '1.2',
				fontWeight: '700'
			}]
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#00AFCC',
					darken: '#0092cc'
				},
				gray: {
					100: '#F1F1F1',
					200: '#C9C9C9'
				},
				purple: '#4F2169',
				brown: '#4D3025',
				orange: '#FA4617'
			},
			dropShadow: {
				'3xl': '0px 4px 2px rgba(0, 0, 0, 0.3)'
			},
		},
	},
	plugins: []
}
