<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Clients from '$components/Clients.svelte';
	import Page from '$components/Page.svelte';
	import { localstorage } from '$lib/utils';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let uid = $page.params.slug;
	let gallery = [];

	onMount(() => {
		const clients = localstorage.get('clients');
		if (clients) {
			const client = clients.filter((client) => client.uid === uid);
			gallery = client[0].gallery;
		}
	});
</script>

<Page>
	<Clients>
		{#if gallery}
			{#each gallery as G}
				<PhotoTile url={G.url} />
			{/each}
		{/if}
	</Clients>
</Page>
