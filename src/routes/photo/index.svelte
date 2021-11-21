<script context="module">
	// code here
	let array = [1, 2, 3, 4, 5, 6];
</script>

<svelte:head>
	<title>PHOTO | T&C</title>
</svelte:head>

<!-- UPDATE TO FLEXBOX  https://tailwindgrids.com/#/ -->

<section class="w-full">
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-sm md:max-w-2xl lg:max-w-4xl content-center w-full"
	>
		{#each array as photo}
			<div class="h-56 w-full bg-red-500" />
		{/each}
	</div>

	<div class="flex flex-col justify-center items-center mt-6 space-y-6">
		<div class="divider w-64 sm:w-96 md:w-full max-w-2xl" />
		<p class="text-sm">PRICING</p>
	</div>
</section>

<style lang="postcss">
</style>
