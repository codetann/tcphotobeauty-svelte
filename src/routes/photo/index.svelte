<script context="module">
	let array = [1, 2, 3, 4, 5, 6, 7, 8];

	let PACKAGES = [
		{
			title: 'Package 1',
			price: '$1000',
			services: ['4 Hour Coverage', 'Bridals', 'Engagements']
		},
		{
			title: 'Package 2',
			price: '$1300',
			services: ['8 Hour Coverage', 'Bridals', 'Engagements']
		}
	];
</script>

<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import { CLIENTS } from '../../data/test.data';
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<section class="w-full max-w-6xl flex flex-col justify-center items-center">
	<!-- clients -->
	<div class="flex flex-wrap justify-center items-center mb-4">
		{#each CLIENTS.PHOTO as P}
			<PhotoTile url={P.url} text={P.text} />
			<!-- <div class="h-56 bg-red-500 sm:w-56 w-full my-2 mx-4 sm:mx-2" /> -->
		{/each}
	</div>

	<div class="spacer" />

	<!-- packages & pricing -->
	<div class="pricing-section">
		<div class="line" />
		<p class="text-sm mt-10 mb-4">PRICING</p>
		<div class="packages">
			{#each PACKAGES as p}
				<div class="package">
					<span class="package-header">
						<h1>{p.title}</h1>
						<p>●</p>
						<h2>{p.price}</h2>
					</span>
					<ul class="package-services border-pr">
						{#each p.services as s}
							<li class="my-2">{s}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<p class="my-2">A La Carte</p>
		<div class="w-full bg-black bg-opacity-90 min-h-16 flex justify-center items-center h-56 mb-12">
			<ul class="text-white text-center">
				<li class="m-4">Wedding 4 hours | $600</li>
				<li class="m-4">Wedding 8 hours | $800</li>
				<li class="m-4">Bridals | $400</li>
				<li class="m-4">Engagements | $400</li>
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
		@apply flex flex-col justify-start items-center mt-10 px-4 w-full;
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
		@apply text-2xl font-black;
	}
	.package-header p {
		@apply text-xs;
	}
	.package-header h2 {
		@apply text-xl opacity-60 font-light;
	}
	.package-services {
		height: 13rem;
		@apply text-center border border-gray-800 border-opacity-50 flex flex-col justify-center items-center bg-black bg-opacity-90 text-white;
	}
</style>
