/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				p1: '#4B4A53',
				p2: '#BEBEC3',
				p3: '#E9E7E9',
				p4: '#5B5D68',
				p5: '#686878',
				p6: '#1C1A29',
				p7: '#84838B',
				bg1: '#14122a',
				bg2: '#1E1C2F',
				bg3: '#181538',
				bg4: '#221f42',
				bg4: '#0f0d20',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
		},
		fontFamily: {
			primary: ['Plus Jakarta Sans', 'sans-serif'],
		},
	},
	plugins: [require('tailwindcss-animate')],
};
