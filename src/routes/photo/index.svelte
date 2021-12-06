<script context="module">
	import { createClient } from '$lib/prismic';
	import { parseClients } from '$lib/utils';
	export async function load({ fetch }) {
		const prismic = createClient(fetch);
		const clients = await prismic.getAllByType('client-photos');
		return {
			props: {
				clients
			}
		};
	}
</script>

<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Pricing from '$components/Pricing.svelte';
	import Page from '$components/Page.svelte';
	import pricing from './config.json';
	export let clients;
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<button on:click={() => console.log(parseClients(clients))}>LOG</button>

<Page>
	<div class="clients">
		{#each parseClients(clients) as P}
			<PhotoTile url={P.thumbnail} text={P.title} />
		{/each}
	</div>
	<Pricing packages={pricing.packages} carte={pricing.carte} />
	<div class="line" />
</Page>

<style lang="postcss">
	.clients {
		@apply flex flex-wrap justify-center items-center mb-4;
	}
</style>
