<script context="module">
	let CLIENTS = [
		{
			url: `https://www.youtube.com/embed/nW2k7kQGRYI`,
			client: `Taylor & Scott`,
			service: `First Look`
		},
		{
			url: `https://www.youtube.com/embed/BEutqfWpFD4`,
			client: `Cory & Bethany`,
			service: 'Wedding Day'
		},
		{
			url: `https://www.youtube.com/embed/yZejvMFuzX0`,
			client: `Brad & Maddie`,
			service: `Wedding Day`
		}
	];

	let PACKAGES = [
		{
			title: 'Package 1',
			price: '$1000',
			services: ['First Look', 'Wedding Day/Ceremony']
		},
		{
			title: 'Package 2',
			price: '$1300',
			services: ['First Look', 'Wedding Day/Ceremony', 'Reception']
		}
	];
</script>

<svelte:head>
	<title>Video | T&C</title>
</svelte:head>

<!-- UPDATE TO FLEXBOX  https://tailwindgrids.com/#/ -->

<section class="w-full max-w-5xl">
	<div class="w-full flex flex-wrap justify-center items-center">
		{#each CLIENTS as client}
			<div class="flex flex-col justify-center items-center flex-wrap mb-10 ">
				<div class="w-full px-2">
					<div class="h-full w-full">
						<iframe
							class="w-full h-56"
							src={client.url}
							frameborder="0"
							title={client.client}
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						/>
					</div>
				</div>
				<div class="w-full px-2">
					<div class="h-full">
						<h2 class="text-2xl font-bold">{client.client}</h2>
						<p class="text-xl">{client.service}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- <iframe
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yZejvMFuzX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		width="560"
		height="315"
		src="https://www.youtube.com/embed/nW2k7kQGRYI"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>

	<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/BEutqfWpFD4"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/> -->

	<div class="pricing-section">
		<div class="line" />
		<p class="text-sm my-10">PRICING</p>
		<div class="packages">
			<!-- loop over packages and display them-->
			{#each PACKAGES as p}
				<div class="package">
					<span class="package-header">
						<h1>{p.title}</h1>
						<p>●</p>
						<h2>{p.price}</h2>
					</span>
					<ul class="package-services">
						{#each p.services as s}
							<li>{s}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="postcss">
	.min {
		min-width: 300px;
	}
	.pricing-section {
		@apply flex flex-col justify-start items-center mt-10 mx-6;
	}
	.packages {
		@apply w-full flex flex-col sm:flex-row max-w-5xl py-8 mb-10 justify-center space-x-0 space-y-3 sm:space-x-4 sm:space-y-0;
	}
	.package {
		@apply w-full mb-6 sm:my-0;
	}
	.package-header {
		@apply flex w-full justify-center items-center mb-10 space-x-2;
	}
	.package-header h1 {
		@apply text-3xl font-black text-center;
	}
	.package-header p {
		@apply text-sm;
	}
	.package-header h2 {
		@apply text-3xl opacity-60 font-light;
	}
	.package-services {
		height: 13rem;
		@apply text-center space-y-5 border border-gray-800 border-opacity-50 flex flex-col justify-center items-center;
	}
</style>
