/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: '#e8ed5a',

					secondary: '#6129d1',

					accent: '#a3f7e3',

					neutral: '#1a1b2e',

					'base-100': '#2e2a60',

					info: '#7ccee4',

					success: '#24947f',

					warning: '#986210',

					error: '#e56c7e'
				}
			},
			'dark'
		]
	}
};
