<script context="module">
	import { createClient } from '$lib/prismic';
	import { parseClients } from '$lib/utils';
	export async function load({ fetch }) {
		console.log('fetching clients');
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
	import Clients from '$components/Clients.svelte';
	import Pricing from '$components/Pricing.svelte';
	import Divider from '$components/Divider.svelte';
	import Spacer from '$components/Spacer.svelte';
	import Page from '$components/Page.svelte';
	import pricing from './config.json';

	export let clients;
</script>

<svelte:head>
	<title>Photo | T&C</title>
</svelte:head>

<Page>
	<Clients>
		{#each parseClients(clients) as P}
			<a
				href="https://drive.google.com/drive/folders/1vWzebewRqJtCAR1-RSHPlVU3dVajP-TR?usp=sharing"
				target="_blank"
			>
				<PhotoTile uid={P.uid} url={P.thumbnail} text={P.title} />
			</a>
		{/each}
	</Clients>
	<Spacer />
	<Pricing packages={pricing.packages} carte={pricing.carte} />
	<Divider />
</Page>
