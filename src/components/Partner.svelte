<script lang="ts">
	type Partner = {
		name: string
		logo_image: {
			sizes: {
				logo: {
					url: string
				}
			}
			alt: string
		}
		link: string
	}

	export let partner: Partner
</script>

<li class="flex items-center gap-4">
	<h3 class="order-2 w-fit">
		<a href={partner.link} class="focus:outline-2" tabindex="0"
			>{partner.name}</a
		>
	</h3>
	<div class="relative h-16 w-16 min-w-fit">
		<div class="bg-primary absolute h-[4.5rem] w-[4.5rem] -translate-x-2"></div>
		<div class="absolute h-[4.5rem] w-[4.5rem] -translate-y-2 bg-black"></div>
		<img
			src={`${import.meta.env.CMS_URL}${
				partner.logo_image.sizes?.logo.url ?? ""
			}`}
			alt=""
			class="relative block h-16 w-16 shrink-0 list-none bg-white p-2"
		/>
	</div>
</li>
