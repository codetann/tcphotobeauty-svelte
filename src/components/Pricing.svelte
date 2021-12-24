<script>
	import Spacer from './Spacer.svelte';

	export let carte;
	export let packages;
	export let isBeautyPricing = false;
</script>

<div class="pricing-section">
	<div class="line" />
	<Spacer />
	<p class="text-sm">PRICING</p>
	<Spacer />
	<div class="packages">
		{#if !isBeautyPricing}
			{#each packages as p}
				<div class="package">
					<span class="package-header">
						<h1>{p.title}</h1>
						<h2>${p.price}</h2>
					</span>
					<ul class="package-services text-sm">
						{#each p.services as s}
							<li class="my-2">{s}</li>
						{/each}
					</ul>
				</div>
			{/each}
		{/if}
	</div>
	<p class="mb-2 mt-4">{isBeautyPricing ? 'Services' : 'A La Carte'}</p>
	<div
		class="w-full max-w-5xl bg-black bg-opacity-90 min-h-16 flex justify-center items-center h-56 mb-12"
	>
		<ul class="text-white text-center text-sm">
			{#each carte as s}
				<li class="m-4">{s.title} | ${s.price}</li>
			{/each}
		</ul>
	</div>
</div>

<style lang="postcss">
	.pricing-section {
		@apply flex flex-col justify-start items-center px-2 w-full max-w-5xl;
	}
	.packages {
		@apply w-full flex flex-col sm:flex-row max-w-5xl  justify-center space-x-0 space-y-3 sm:space-x-2 sm:space-y-0;
	}
	.package {
		@apply w-full mb-6 sm:my-0;
	}
	.package-header {
		@apply flex w-full justify-center items-center mb-2 space-x-2;
	}
	.package-header h1 {
		@apply text-lg font-black;
	}
	.package-header p {
		@apply text-xs;
	}
	.package-header h2 {
		@apply text-lg opacity-60 font-light;
	}
	.package-services {
		height: 13rem;
		@apply text-center border border-gray-800 border-opacity-50 flex flex-col justify-center items-center bg-black bg-opacity-90 text-white;
	}
</style>
