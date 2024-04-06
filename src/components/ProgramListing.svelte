<script lang="ts">
	import { onMount } from "svelte"
	import Carousel from "./Carousel/Carousel.svelte"
	import LinkButton from "./LinkButton.svelte"
	import type { HungerDataMedia, HungerDataProgram } from "@/payloadTypes"

	export let program: HungerDataProgram

	let images = program.gallery_images
</script>

<section
	id={program.title_id}
	class="root md:max-w-1xl grid min-h-[300px] gap-16 md:mx-auto lg:grid-cols-3"
>
	<div class="col-span-2">
		<header class="mb-4 mt-1 flex items-center gap-4">
			{#if program.logo_image && typeof program.logo_image != "number"}
				<img
					src={program.logo_image.sizes?.logo?.url}
					alt=""
					class="absolute h-24 w-24 opacity-20 lg:static lg:h-20 lg:w-20 lg:opacity-100"
				/>
			{/if}
			<h2
				class="relative mt-8 text-4xl font-extrabold uppercase leading-10 tracking-tight text-gray-900 sm:text-6xl sm:leading-none lg:mt-0 lg:text-5xl xl:text-6xl"
			>
				{program.title}
			</h2>
		</header>
		{@html program.description_html}
		{#if program.cta_button?.url}
			<LinkButton href={program.cta_button.url} classes="mt-4">
				{program.cta_button.text}
			</LinkButton>
		{/if}
	</div>
	<div>
		<Carousel images={program.gallery_images} />
	</div>
</section>

<style>
	.root :global(p) {
		@apply mb-4 font-body text-base text-gray-600;

		@media (min-width: 640px) {
			font-size: 1.25rem /* 20px */;
			line-height: 1.75rem /* 28px */;
		}

		@media (min-width: 1024px) {
			font-size: 1.125rem /* 18px */;
			line-height: 1.75rem /* 28px */;
		}
	}

	.root :global(h3) {
		@apply mt-4 text-2xl font-bold uppercase text-gray-700;
	}

	.root :global(ul) {
		@apply list-inside list-disc font-body text-base text-gray-600;

		@media (min-width: 640px) {
			font-size: 1.25rem /* 20px */;
			line-height: 1.75rem /* 28px */;
		}

		@media (min-width: 1024px) {
			font-size: 1.125rem /* 18px */;
			line-height: 1.75rem /* 28px */;
		}
	}
</style>
