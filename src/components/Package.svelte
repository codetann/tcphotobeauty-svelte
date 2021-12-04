<script>
	export let title;
	export let price;
	export let services;
</script>

<div class="package">
	<span class="package-header">
		<h1>{title}</h1>
		<h2>{price}</h2>
	</span>
	<ul class="package-services text-sm">
		{#each services as s}
			<li class="my-2">{s}</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.package {
		@apply w-full mb-6 sm:my-0 mx-0 sm:mx-1;
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
