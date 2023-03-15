import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: "Visit Argentina",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [
				{
					key: "description",
					name: "description",
					content: "This is a fake site part of a technical experiment",
				},
			],
		},
	},
	ssr: true,
	telemetry: false,
	typescript: {
		strict: true,
	},
	modules: ["@nuxtjs/tailwindcss"],
});
