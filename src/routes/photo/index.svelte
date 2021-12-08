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
	import pricing from './config.json';
	import Page from '$components/Page.svelte';
	import Spacer from '$components/Spacer.svelte';
  import Pricing from '$components/Pricing.svelte';
	import Clients from '$components/Clients.svelte';
	import Divider from '$components/Divider.svelte';
	import PhotoTile from '$components/PhotoTile.svelte';

	export let clients;
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<Page>
	<Clients>
		{#each parseClients(clients) as P}
			<PhotoTile url={P.thumbnail} text={P.title} />
		{/each}
	</Clients>
	<Spacer />
	<Pricing packages={pricing.packages} carte={pricing.carte} />
	<Divider />
</Page>
