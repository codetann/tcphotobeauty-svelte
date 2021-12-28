<script>
	import { fade } from 'svelte/transition';
	export let photos = [];
	export let index;
	export let isOpen = false;
	export let onClick = () => null;

	console.log(index);
</script>

<div class="photo__carousel " in:fade={{ duration: 200 }} out:fade={{ duration: 200 }}>
	<i class="fas fa-times photo__carousel__icon top-right " on:click={onClick} />
	{#if index > 0}
		<i class="fas fa-chevron-left photo__carousel__icon left" on:click={() => (index -= 1)} />
	{/if}
	{#each photos as photo, i}
		{#if i === index}
			<img src={photo.url} class="photo__carousel__image" alt="" />
		{/if}
	{/each}

	{#if index < photos.length - 1}
		<i class="fas fa-chevron-right photo__carousel__icon right" on:click={() => (index += 1)} />
	{/if}
</div>

<style lang="postcss">
	.photo__carousel {
		@apply fixed h-screen w-screen bg-black backdrop-blur-3xl bg-opacity-80 overflow-hidden;
		@apply flex justify-center items-center;
		@apply transition-all duration-200 ease-in-out;
		@apply p-20;
	}
	.photo__carousel__image {
		@apply absolute w-full h-auto sm:w-auto sm:h-full sm:py-6 object-cover;
	}
	.photo__carousel__icon {
		@apply absolute text-white z-20 text-3xl cursor-pointer;
	}
	.left {
		@apply left-5 sm:left-10;
	}
	.right {
		@apply right-5 sm:right-10;
	}
	.top-right {
		@apply top-10 right-10;
	}
</style>
