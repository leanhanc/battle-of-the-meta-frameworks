const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
				},
			},
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				heading: ["OpenSans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				yellow: {
					100: "#FFFBEA",
					200: "#FFF3C4",
					300: "#FFEA76",
					400: "#FFD940",
					500: "#F6E092",
					600: "#D4B106",
					700: "#9C7B00",
					800: "#744800",
					900: "#4D2600",
				},
			},
		},
	},
	plugins: [],
};
