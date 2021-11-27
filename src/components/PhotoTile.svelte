<script>
	export let url;
	export let text;
</script>

<div style="--url: url({url})" class="photo-tile">
	{text}
</div>

<style lang="postcss">
	.photo-tile {
		background: linear-gradient(rgba(0, 0, 0, 0.096), rgba(0, 0, 0, 0.199)), var(--url);
		@apply lg:w-80 lg:h-80 md:w-72 md:h-72 w-full h-60 mx-4 my-2 bg-cover backdrop-filter backdrop-blur text-white flex justify-center items-center text-center text-sm cursor-pointer transition-all duration-100;

		@apply hover:opacity-80;
	}
</style>
