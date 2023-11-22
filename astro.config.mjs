import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	trailingSlash: "ignore",
	output: "server",
	adapter: vercel(),
})
