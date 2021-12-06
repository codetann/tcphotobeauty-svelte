<script context="module">
	//
</script>

<script>
	import Pricing from '$components/Pricing.svelte';
	import { CLIENTS } from '../../data/test.data';
	import Video from '$components/Video.svelte';
	import Page from '$components/Page.svelte';
	import pricing from './config.json';
</script>

<svelte:head>
	<title>Video | T&C</title>
</svelte:head>

<Page>
	<div class="clients">
		{#each CLIENTS.VIDEO as V}
			<Video src={V.src} thumbnail={V.thumbnail} title={V.title} />
		{/each}
	</div>
	<Pricing packages={pricing.packages} carte={pricing.carte} />
	<div class="line" />
</Page>

<style lang="postcss">
	.clients {
		@apply w-full flex flex-wrap justify-center items-center;
	}
</style>
