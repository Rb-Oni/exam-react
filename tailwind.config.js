/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				custom: '#ff5a5f',
				dark: {
					primary: '#1a202c',
					secondary: '#e6e8ec',
				},
			},
		},
	},
	plugins: [],
};
