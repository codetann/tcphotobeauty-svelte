<script context="module">
	// let CLIENTS = [
	// 	{
	// 		url: `https://www.youtube.com/embed/nW2k7kQGRYI`,
	// 		client: `Taylor & Scott`,
	// 		service: `First Look`
	// 	},
	// 	{
	// 		url: `https://www.youtube.com/embed/BEutqfWpFD4`,
	// 		client: `Cory & Bethany`,
	// 		service: 'Wedding Day'
	// 	},
	// 	{
	// 		url: `https://www.youtube.com/embed/yZejvMFuzX0`,
	// 		client: `Brad & Maddie`,
	// 		service: `Wedding Day`
	// 	}
	// ];

	let PACKAGES = [
		{
			title: 'Package 1',
			price: '$1000',
			services: ['First Look', 'Wedding Day/Ceremony', ' ']
		},
		{
			title: 'Package 2',
			price: '$1400',
			services: ['First Look', 'Wedding Day/Ceremony', 'Reception']
		}
	];
</script>

<script>
	import Video from '$components/Video.svelte';
	import { CLIENTS } from '../../data/test.data';
</script>

<svelte:head>
	<title>Video | T&C</title>
</svelte:head>

<section class="w-full max-w-5xl">
	<div class="w-full flex flex-wrap justify-center items-center ">
		<!-- clients -->
		{#each CLIENTS.VIDEO as V}
			<Video src={V.src} thumbnail={V.thumbnail} title={V.title} />
		{/each}
	</div>
	<!-- packages -->
	<div class="pricing-section">
		<div class="line" />
		<p class="text-sm mt-10 pb-4">PRICING</p>
		<div class="packages">
			<!-- loop over packages and display them-->
			{#each PACKAGES as p}
				<div class="package">
					<span class="package-header">
						<h1>{p.title}</h1>
						<h2 class="my-1">{p.price}</h2>
					</span>
					<ul class="package-services">
						{#each p.services as s, i}
							<li class="my-2">{s}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<p class="mb-2 mt-4">A La Carte</p>
		<div class="w-full bg-black bg-opacity-90 min-h-16 flex justify-center items-center h-56 mb-12">
			<ul class="text-white text-center">
				<li class="m-4">First Look | $500</li>
				<li class="m-4">Wedding/Ceremony | $600</li>
				<li class="m-4">Reception | $500</li>
			</ul>
		</div>
		<div class="line" />
	</div>
</section>

<style lang="postcss">
	.min {
		min-width: 300px;
	}
	.pricing-section {
		@apply flex flex-col justify-start items-center mt-10 mx-4;
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
