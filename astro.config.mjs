import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		tailwind({
			applyBaseStyles: false,
		}),
	],
	site: "https://uplionsserve.org",
	base: "/hunger",
	output: "static",
	outDir: "dist/hunger",
})
