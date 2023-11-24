<script lang="ts">
	import LinkButton from "./LinkButton.svelte"

	let menuIsOpen = false
	function toggleMenu() {
		menuIsOpen = !menuIsOpen
		console.log(menuIsOpen)
	}
</script>

<header
	class="m-8 flex w-full max-w-7xl items-center gap-4 lg:m-0 lg:m-auto lg:ml-10"
>
	<div class="relative z-50 block lg:hidden">
		<LinkButton on:click={toggleMenu}>
			<span class="block">&#9776;</span>
		</LinkButton>
	</div>
	<div class="hidden lg:block">
		<LinkButton href="/">
			<span class="block -translate-x-[2px] -rotate-90">&#9650;</span>
		</LinkButton>
	</div>
	<div class="hidden lg:block">
		<a href="/hunger" class="no-underline">
			<img src="/hunger/logo.svg" alt="" class="w-32" />
		</a>
	</div>
	<menu
		class:mobile-menu-opened={menuIsOpen}
		class="pointer-events-none fixed left-0 top-0 z-40 flex h-screen w-screen translate-y-[5%] flex-col items-center justify-center gap-6 bg-white text-4xl opacity-0 transition-all lg:pointer-events-auto lg:static lg:h-auto lg:w-full lg:flex-row lg:justify-start lg:text-2xl lg:opacity-100"
	>
		<li class="lg:hidden"><a href="/">Back to UPLS</a></li>
		<li><a href="/hunger">Home</a></li>
		<li><a href="/hunger/programs">Programs</a></li>
		<li><a href="/hunger/about">About</a></li>
		<li class="lg:hidden"><a href="/hunger/donate">Donate</a></li>
	</menu>
</header>
<menu class="fixed right-20 top-10 z-50 hidden lg:block xl:right-10">
	<li>
		<LinkButton href="/hunger/donate">Donate</LinkButton>
	</li>
</menu>

<style>
	.mobile-menu-opened {
		transform: translateY(0);
		opacity: 1;
		pointer-events: all;
	}
</style>
