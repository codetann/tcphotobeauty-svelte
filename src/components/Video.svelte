<script>
	import { fade } from 'svelte/transition';

	export let src;
	export let title;
	export let thumbnail;

	let isPlaying = false;

	const handleClick = (e) => {
		e.preventDefault();
		const video = document.querySelector('.ytp-button');

		if (!isPlaying) {
			isPlaying = true;
		}

		video.click();
	};
</script>

{#if isPlaying}
	<iframe
		id="video"
		class="w-96 h-48 m-2"
		{src}
		frameborder="0"
		{title}
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
{:else}
	<div transition={fade} style="--url: url({thumbnail})" class="thumbnail" on:click={handleClick}>
		<i class="fas fa-play " />
	</div>
{/if}

<style lang="postcss">
	.thumbnail {
		background-image: var(--url);
		@apply w-96 h-48 bg-cover bg-center flex justify-center items-center cursor-pointer text-white text-4xl m-2;
		@apply transform transition-all duration-200 ease-in-out hover:text-blue-700 hover:text-5xl hover:opacity-80;
	}
	/*  */
</style>
