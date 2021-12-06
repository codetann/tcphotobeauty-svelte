<script context="module">
	//
</script>

<script>
	import Pricing from '$components/Pricing.svelte';
	import Divider from '$components/Divider.svelte';
	import Clients from '$components/Clients.svelte';
	import Spacer from '$components/Spacer.svelte';
	import { CLIENTS } from '../../data/test.data';
	import Video from '$components/Video.svelte';
	import Page from '$components/Page.svelte';
	import pricing from './config.json';
</script>

<svelte:head>
	<title>Video | T&C</title>
</svelte:head>

<Page>
	<Clients>
		{#each CLIENTS.VIDEO as V}
			<Video src={V.src} thumbnail={V.thumbnail} title={V.title} />
		{/each}
	</Clients>
	<Spacer />
	<Pricing packages={pricing.packages} carte={pricing.carte} />
	<Divider />
</Page>
