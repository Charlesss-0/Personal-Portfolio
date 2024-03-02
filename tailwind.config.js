/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				md: '0 1px 5px 0 #0003',
			},
			screens: {
				xl: { max: '1279px' },
				lg: { max: '1023px' },
				md: { max: '800px' },
				sm: { max: '400px' },
			},
		},
	},
	plugins: [],
}
