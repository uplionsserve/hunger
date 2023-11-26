<script lang="ts">
	import { onMount } from "svelte"
	import Carousel from "./Carousel/Carousel.svelte"
	import LinkButton from "./LinkButton.svelte"

	type Image = {
		src: string
		alt: string
		caption: string
	}

	type Program = {
		title: string
		title_id: string
		logo_image: {
			sizes: {
				logo: {
					url: string
				}
			}
			alt: string
		}
		description_html: string
		cta_button: {
			text: string
			url: string
		}
		gallery_images: Array<{
			image: {
				url: string
				alt: string
			}
			caption: string
		}>
	}

	export let program: Program

	let images: Image[] =
		program.gallery_images.map((image) => ({
			src: image.image.url,
			alt: image.image.alt,
			caption: image.caption,
		})) || []
</script>

<section
	id={program.title_id}
	class="root md:max-w-1xl grid min-h-[300px] gap-4 md:mx-auto lg:grid-cols-3"
>
	<div class="col-span-2">
		<header class="mb-4 mt-1 flex items-center gap-4">
			{#if program.logo_image}
				<img
					src={`${
						import.meta.env.PROD
							? program.logo_image.sizes?.logo.url
							: `http://localhost:3000${program.logo_image.sizes?.logo.url}` ??
							  ""
					}`}
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
		{#if program.cta_button.url}
			<LinkButton href={program.cta_button.url} classes="mt-4">
				{program.cta_button.text}
			</LinkButton>
		{/if}
	</div>
	{#if images.length > 0}
		<div>
			<Carousel {images} />
		</div>
	{/if}
</section>

<style>
	.root :global(p) {
		@apply font-body text-base text-gray-600;

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
		@apply font-body list-inside list-disc text-base text-gray-600;

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
