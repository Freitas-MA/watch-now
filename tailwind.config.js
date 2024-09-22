/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
		  colors: {
			primary: 'var(--color-primary)',
			neutral: 'var(--color-neutral)',
			background: 'var(--color-background)',
			secondary: 'var(--color-secondary)',
			support: 'var(--color-support)',
		  },
		},
	  },
	plugins: [require("tailwind-scrollbar-hide")],
};
