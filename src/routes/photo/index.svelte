<!-- <script context="module">
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
</script> -->

<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Clients from '$components/Clients.svelte';
	import Pricing from '$components/Pricing.svelte';
	import Divider from '$components/Divider.svelte';
	import Spacer from '$components/Spacer.svelte';
	import Page from '$components/Page.svelte';
	import config from './config.json';
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<Page>
	<Clients>
		{#each config.clients as P}
			<PhotoTile uid={P.key} url={P.thumbnail} text={P.title} />
		{/each}
	</Clients>
	<Spacer />
	<Pricing packages={config.packages} carte={config.carte} />
	<Divider />
</Page>
