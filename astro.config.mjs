import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		svelte(),
		sitemap(),
	],
	trailingSlash: "ignore",
	base: "/hunger",
	output: "static",
	outDir: "dist/hunger",
})
