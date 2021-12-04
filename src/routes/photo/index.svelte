<script context="module">
	import { createClient } from '$lib/prismic';
	import { parsePackage } from '$lib/utils';

	export async function load({ fetch }) {
		const prismic = createClient();
		const packages = await prismic.getAllByType('package');
		return {
			props: {
				packages
			}
		};
	}
</script>

<script>
	import json from './config.json';
	import PhotoTile from '$components/PhotoTile.svelte';
	import Package from '$components/Package.svelte';
	import { CLIENTS } from '../../data/test.data';

	export let packages;
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<section class="w-full max-w-6xl flex flex-col justify-center items-center">
	<!-- clients -->
	<div class="flex flex-wrap justify-center items-center mb-4">
		{#each CLIENTS.PHOTO as P}
			<PhotoTile url={P.url} text={P.text} />
		{/each}
	</div>

	<div class="spacer" />

	<!-- packages & pricing -->
	<div class="pricing-section">
		<div class="line" />
		<p class="text-sm mt-10 mb-4">PRICING</p>
		<div class="packages">
			{#each parsePackage(packages) as p}
				<Package title={p.title} price={p.price} services={p.services} />
			{/each}
		</div>
		<p class="mb-2 mt-4">A La Carte</p>
		<div
			class="w-full max-w-5xl bg-black bg-opacity-90 min-h-16 flex justify-center items-center h-56 mb-12"
		>
			<ul class="text-white text-center text-sm">
				{#each json.services as s}
					<li class="m-4">{s.description} | ${s.price}</li>
				{/each}
				<!-- <li class="m-4">Wedding 4 hours | $600</li>
				<li class="m-4">Wedding 8 hours | $800</li>
				<li class="m-4">Bridals | $400</li>
				<li class="m-4">Engagements | $400</li> -->
			</ul>
		</div>
	</div>
	<div class="line" />
</section>

<style lang="postcss">
	.min {
		min-width: 250px;
	}
	.pricing-section {
		@apply flex flex-col justify-start items-center mt-10 px-2 w-full;
	}
	.packages {
		@apply w-full flex flex-col sm:flex-row max-w-5xl py-4 justify-center space-x-0 space-y-3 sm:space-x-4 sm:space-y-0;
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
