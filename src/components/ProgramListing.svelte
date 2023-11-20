<script lang="ts">
	type Program = {
		title: string
		title_id: string
		description_html: string
	}

	export let program: Program
</script>

<div
	id={program.title_id}
	class="root md:max-w-1xl flex flex-col gap-4 md:mx-auto lg:col-span-8"
>
	<h2
		class="mb-4 mt-1 text-4xl font-extrabold uppercase leading-10 tracking-tight text-gray-900 sm:text-6xl sm:leading-none lg:text-5xl xl:text-6xl"
	>
		{program.title}
	</h2>

	{@html program.description_html}
</div>

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
