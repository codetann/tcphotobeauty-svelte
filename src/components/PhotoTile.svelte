<script>
	export let url;
	export let text;
	export let uid;
</script>

<div style="--url: url({url})" class="photo-tile">
	{text}
</div>

<style lang="postcss">
	.photo-tile {
		background: linear-gradient(rgba(0, 0, 0, 0.096), rgba(0, 0, 0, 0.199)), var(--url);
		@apply lg:w-80 lg:h-80 md:w-72 md:h-72 w-full h-60 mx-2 sm:mx-1 my-1 bg-cover bg-center backdrop-filter backdrop-blur text-white flex justify-center items-center text-center text-sm cursor-pointer transition-all duration-100;

		@apply hover:opacity-80;
	}
</style>
