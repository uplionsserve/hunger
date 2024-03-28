<script lang="ts">
	import LinkButton from "@components/LinkButton.svelte"
	import { useCarousel } from "./useCarousel"
	import type { HungerDataMedia, HungerDataProgram } from "@/payloadTypes"

	type CarouselOptions = {
		autoScroll: boolean
	}

	export let images: HungerDataProgram["gallery_images"]
	export let options: CarouselOptions = {
		autoScroll: false,
	}

	$: imagesWithProperSrc = images.map((image) => ({
		...image,
		src: image.src,
	}))

	const { currentIndex, nextIndex, previousIndex, previous, next } =
		useCarousel(images)

	let modalOpen = false

	function showImageModal() {
		modalOpen = true
		// modalElem.showModal()
	}

	function closeImageModal() {
		modalOpen = false
		// modalElem.close()
	}
	// Buttons to switch on right and left, only visible image is the one being displayed
	// No pagination buttons but leave space in code for them
	// Add dev option to auto scroll
	// Clicking into an image should open a modal with the image and caption
</script>

{#if images && images.length > 0}
	<div class="flex w-full flex-col gap-4">
		<LinkButton on:click={showImageModal} disabled>
			<!-- This is a button because clicking it opens a modal. -->
			<!-- ::Before -->
			<div class="w-full py-2">
				<!-- <img
				src={imagesWithProperSrc[$previousIndex].src}
				alt={imagesWithProperSrc[$previousIndex].alt}
			    /> -->
				<img
					src={images[$currentIndex].image?.sizes?.thumbnail?.url}
					alt={images[$currentIndex].image?.alt}
					class="bg-white bg-cover lg:h-72"
				/>
				<!-- <img
				src={imagesWithProperSrc[$nextIndex].src}
				alt={imagesWithProperSrc[$nextIndex].alt}
			    /> -->
			</div>
		</LinkButton>
		{#if images?.length > 1}
			<div class="flex gap-4">
				<LinkButton on:click={previous}>
					<span class="block -translate-x-0.5 -rotate-90"> &#9650; </span>
				</LinkButton>
				<LinkButton on:click={next}>
					<span class="block translate-x-0.5 rotate-90"> &#9650; </span>
				</LinkButton>
			</div>
		{/if}
		<dialog open={modalOpen}>
			<!-- Modal -->
			<!-- ::backdrop -->
			<!-- Use open attr -->
			<button on:click={closeImageModal}>Close</button>
		</dialog>
	</div>
{/if}
