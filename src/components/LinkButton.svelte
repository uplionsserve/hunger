<script lang="ts">
	import { createEventDispatcher } from "svelte"

	export let href: string | undefined = undefined
	export let classes: string = ""

	const dispatch = createEventDispatcher()
	function click() {
		dispatch("click")
	}
</script>

<svelte:element
	this={href ? "a" : "button"}
	{href}
	class="shadow-before relative h-fit w-fit no-underline {classes}"
	on:click={click}
	role={href ? undefined : "button"}
>
	<span
		class="bg-primary block w-fit px-5 py-3 text-lg font-bold uppercase text-white no-underline hover:brightness-90"
	>
		<slot />
	</span>
</svelte:element>

<style>
	.shadow-before::before {
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
	.shadow-before:hover::before {
		transform: translate(0, 0);
		opacity: 0;
	}
</style>
