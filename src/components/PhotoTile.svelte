<script>
	export let url;
	export let uid;
	export let text;
	export let isGallery = false;
	export let onClick = () => null;
</script>

{#if isGallery}
	<div style="--url: url({url})" class="photo__tile--gallery" on:click={onClick}>
		{text || ''}
	</div>
{:else}
	<a href={`/photo/${uid}`} style="--url: url({url})" class="photo__tile">
		{text || ''}
	</a>
{/if}

<style lang="postcss">
	.photo__tile--gallery {
		background: var(--url);
		@apply lg:w-80 lg:h-80 md:w-72 md:h-72 w-full h-96 mx-2 sm:mx-1 my-1 bg-cover bg-center backdrop-filter backdrop-blur text-white flex justify-center items-center text-center text-sm cursor-pointer transition-all duration-100;
	}
	.photo__tile {
		background: linear-gradient(rgba(0, 0, 0, 0.096), rgba(0, 0, 0, 0.199)), var(--url);
		@apply lg:w-80 lg:h-80 md:w-72 md:h-72 w-full h-96 mx-2 sm:mx-1 my-1 bg-cover bg-center backdrop-filter backdrop-blur text-white flex justify-center items-center text-center text-sm cursor-pointer transition-all duration-200;

		@apply hover:opacity-80;
	}
</style>
