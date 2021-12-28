<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Carousel from '$components/Carousel.svelte';
	import Clients from '$components/Clients.svelte';
	import Page from '$components/Page.svelte';
	import { localstorage } from '$lib/utils';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// state
	let uid = $page.params.slug;
	let client = false;
	let isOpen = false;
	let index = 0;

	// filters through the clients array to find the client with the matching uid and sets the client variable
	onMount(() => {
		const clients = localstorage.get('clients');

		if (clients) {
			const foundClient = clients.filter((client) => client.uid === uid);
			client = foundClient[0];
		}
	});

	// handles the click on the client tile
	function handleClick(i) {
		if (i >= 0) index = i;
		document.querySelector('body').style.overflow = isOpen ? 'visible' : 'hidden';
		isOpen = !isOpen;
	}
</script>

<Page>
	<p class="page__title">{client.title}</p>
	<Clients>
		{#if client}
			{#each client.gallery as G, i}
				<PhotoTile onClick={() => handleClick(i)} isGallery url={G.url} />
			{/each}
		{/if}
	</Clients>
</Page>

{#if isOpen}
	<Carousel {index} photos={client.gallery} onClick={handleClick} />
{/if}

<style lang="postcss">
	.page__title {
		@apply mb-16 mt-10 text-sm;
	}
</style>
