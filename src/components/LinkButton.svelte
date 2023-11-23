<script lang="ts">
	export let href: string = "#"
	export let classes: string = ""
</script>

<a {href} class="shadow-before relative h-fit w-fit {classes}">
	<span
		class="bg-primary block w-fit px-5 py-3 text-lg font-bold uppercase text-white no-underline hover:brightness-90"
	>
		<slot />
	</span>
</a>

<style>
	a::before {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		transform: translate(-8px, 8px);
		background-color: black;
		transition: all 0.1s ease-in-out;
	}
	a:hover::before {
		transform: translate(0, 0);
		opacity: 0;
	}
</style>
