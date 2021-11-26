<script context="module">
	// code here
	let array = [1, 2, 3, 4, 5, 6, 7];
	function test() {}
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<!-- UPDATE TO FLEXBOX  https://tailwindgrids.com/#/ -->

<section class="w-full max-w-5xl">
	<!-- <div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-sm md:max-w-2xl lg:max-w-4xl content-center w-full"
	> -->
	<div class="flex flex-wrap justify-center items-center ">
		{#each array as _}
			<div class="h-56 flex-1 bg-red-500 m-5 min" />
		{/each}
	</div>

	<div class="flex flex-col justify-start items-center mt-6 mx-6 ">
		<div class="h-0.5 bg-opacity-10 bg-black w-64 sm:w-96 md:w-full max-w-2xl mb-8" />
		<p class="text-sm mb-6">PRICING</p>

		<div class="w-full flex  max-w-5xl py-20  mb-10 justify-center items-center bg-red-300">
			<!-- <div class="h-96 flex-1 bg-blue-500" /> -->
			<div class=" w-full">
				<span class="flex w-full justify-center items-center mb-10 space-x-2 ">
					<h1 class="text-3xl  text-center font-black">Package 1</h1>
					<p class="text-sm">●</p>
					<p class="text-3xl ">$900</p>
				</span>
				<ul class="text-center space-y-5 border-price py-10 max-w-3xl">
					<li>4 hour coverage</li>
					<li>Bridals</li>
					<li>Engagements</li>
				</ul>
			</div>
		</div>
		<div class="w-full flex  max-w-5xl py-20  mb-10 justify-center">
			<!-- <div class="h-96 flex-1 bg-blue-500" /> -->
			<div class=" ">
				<span class="flex w-full justify-center items-center mb-10 space-x-2 ">
					<h1 class="text-3xl  text-center font-black">Package 1</h1>
					<p class="text-sm">●</p>
					<p class="text-3xl ">$900</p>
				</span>
				<ul class="text-center space-y-5 border-price py-10">
					<li>4 hour coverage</li>
					<li>Bridals</li>
					<li>Engagements</li>
				</ul>
			</div>
		</div>
		<div class="w-full flex flex-wrap max-w-5xl py-20 border-price">
			<!-- <div class="h-96 flex-1 bg-blue-500" /> -->
			<div class="">
				<h1 class="text-3xl underline text-center mb-5 font-black">Package 1</h1>
				<ul class="text-center space-y-5">
					<li>4 hour coverage</li>
					<li>Bridals</li>
					<li>Engagements</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.min {
		min-width: 250px;
	}
	.border-price {
		@apply border border-gray-800 border-opacity-50;
	}
</style>
