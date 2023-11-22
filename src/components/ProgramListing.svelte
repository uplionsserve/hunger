<script lang="ts">
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
	}

	export let program: Program
</script>

<section
	id={program.title_id}
	class="root md:max-w-1xl flex min-h-[300px] flex-col gap-4 md:mx-auto lg:col-span-8"
>
	<header class="mb-4 mt-1 flex items-center gap-2">
		{#if program.logo_image}
			<img
				src={`${program.logo_image.sizes?.logo.url ?? ""}`}
				alt=""
				class="h-20 w-20"
			/>
		{/if}
		<h2
			class="text-4xl font-extrabold uppercase leading-10 tracking-tight text-gray-900 sm:text-6xl sm:leading-none lg:text-5xl xl:text-6xl"
		>
			{program.title}
		</h2>
	</header>

	{@html program.description_html}

	{#if program.cta_button.url}
		<a
			href={program.cta_button.url}
			target="_blank"
			class="bg-primary w-fit px-5 py-3 font-bold uppercase text-white no-underline hover:brightness-90"
			>{program.cta_button.text}</a
		>
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
