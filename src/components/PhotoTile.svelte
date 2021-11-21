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
		@apply lg:w-72 lg:h-72 md:w-64 md:h-64 w-full h-60 m-2 bg-cover backdrop-filter backdrop-blur text-white flex justify-center items-center text-center text-sm cursor-pointer transition duration-75;
	}
</style>
