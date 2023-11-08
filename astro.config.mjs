import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import sitemap from "@astrojs/sitemap"
import partytown from "@astrojs/partytown"
import node from "@astrojs/node"

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		svelte(),
		sitemap(),
		partytown(),
	],
	base: "/hunger",
	output: "server",
	adapter: node({
		mode: "middleware",
	}),
})
