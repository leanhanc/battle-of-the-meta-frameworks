/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url(/hero.webp)",
			},
		},
	},
	plugins: [],
};
