import { derived, readonly, writable } from "svelte/store"

type Image = {
	src: string
	alt: string
	caption: string
}

function getPreviousIndex(currentIndex: number, length: number): number {
	return currentIndex != 0 ? currentIndex - 1 : length - 1
}

function getNextIndex(currentIndex: number, length: number): number {
	return currentIndex != length - 1 ? currentIndex + 1 : 0
}

export function useCarousel(images: Array<any>) {
	const currentIndex = writable(0)

	const previousIndex = derived(currentIndex, ($currentIndex) => {
		console.log("previousIndex", getPreviousIndex($currentIndex, images.length))
		return getPreviousIndex($currentIndex, images.length)
	})

	const nextIndex = derived(currentIndex, ($currentIndex) => {
		console.log("nextIndex", getNextIndex($currentIndex, images.length))
		return getNextIndex($currentIndex, images.length)
	})

	function next() {
		currentIndex.update(($currentIndex) => {
			console.log("next", getNextIndex($currentIndex, images.length))
			return getNextIndex($currentIndex, images.length)
		})
	}

	function previous() {
		currentIndex.update(($currentIndex) => {
			console.log("previous", getPreviousIndex($currentIndex, images.length))
			return getPreviousIndex($currentIndex, images.length)
		})
	}

	return {
		currentIndex: readonly(currentIndex),
		previousIndex,
		nextIndex,
		next,
		previous,
	}
}

// import { writable } from "svelte/store";
// const STUDENTS = [
//   { name: "john", surname: "doe", age: 17 },
//   { name: "micheal", surname: "angelo", age: 21 },
// ];

// const { subscribe, set, update } = writable(STUDENTS);
// const addStudent = (student) =>
//   update((students) => {
//     return [...students, student];
//   });

// const reset = () => {
//   set(STUDENTS);
// };

// export default {
//   subscribe,
//   addStudent,
//   reset,
// };
