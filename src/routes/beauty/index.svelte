<script context="module">
	import { createClient } from '$lib/prismic';
	import { parseBeauty } from '$lib/utils';
	export async function load({ fetch }) {
		const prismic = createClient(fetch);
		const clients = await prismic.getAllByType('client-beauty');

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
	import Divider from '$components/Divider.svelte';
	import PhotoTile from '$components/PhotoTile.svelte';
	import Clients from '$components/Clients.svelte';

	export let clients;
	console.log(clients);
</script>

<svelte:head>
	<title>Beauty | T&C</title>
</svelte:head>

<Page>
	<Clients>
		{#each parseBeauty(clients) as C}
			<PhotoTile uid={C.uid} url={C.url} isGallery={true} />
		{/each}
	</Clients>
	<Spacer />
	<Pricing isBeautyPricing carte={pricing.carte} />
	<Divider />
</Page>
