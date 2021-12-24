<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Clients from '$components/Clients.svelte';
	import Page from '$components/Page.svelte';
	import { localstorage } from '$lib/utils';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let uid = $page.params.slug;
	let client = false;

	onMount(() => {
		const clients = localstorage.get('clients');
		if (clients) {
			const foundClient = clients.filter((client) => client.uid === uid);
			client = foundClient[0];
		}
	});
</script>

<Page>
	<p class="page__title">{client.title}</p>
	<Clients>
		{#if client}
			{#each client.gallery as G}
				<PhotoTile url={G.url} />
			{/each}
		{/if}
	</Clients>
</Page>

<style lang="postcss">
	.page__title {
		@apply mb-16 mt-10 text-sm;
	}
</style>
