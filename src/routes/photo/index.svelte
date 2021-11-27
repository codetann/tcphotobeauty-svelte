<script context="module">
	let array = [1, 2, 3, 4, 5];

	let PACKAGES = [
		{
			title: 'Package 1',
			price: '$1000',
			services: ['4 Hour Coverage', 'Bridals', 'Engagements']
		},
		{
			title: 'Package 2',
			price: '$1200',
			services: ['8 Hour Coverage', 'Bridals', 'Engagements']
		}
	];
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<section class="w-full max-w-5xl">
	<!-- clients -->
	<div class="flex flex-wrap justify-center items-center ">
		{#each array as _}
			<div class="h-56 flex-1 bg-red-500 m-5 min" />
		{/each}
	</div>

	<!-- packages & pricing -->
	<div class="pricing-section">
		<div class="line" />
		<p class="text-sm my-10">PRICING</p>
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
		min-width: 250px;
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
