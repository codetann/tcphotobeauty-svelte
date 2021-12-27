<!--
  *
  FIX: header image
  *
-->
<script context="module">
	// import { createClient } from '$lib/prismic';
	// import * as prismicH from '@prismicio/helpers';
	// import { parsePackage } from './photo/data';

	// export async function load({ fetch }) {
	// 	const client = createClient(fetch);
	// 	const document = await client.getAllByType('package');

	// 	return {
	// 		props: {
	// 			document
	// 		}
	// 	};
	// }
</script>

<script>
	import PhotoTile from '$components/PhotoTile.svelte';
	import Spacer from '$components/Spacer.svelte';
	import Page from '$components/Page.svelte';
	import Divider from '$components/Divider.svelte';

	export let document;
</script>

<svelte:head>
	<title>Home | T&C</title>
</svelte:head>

<Page>
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<div class="px-2 w-full">
		<div class="image" />
	</div>
	<Spacer />
	<Divider />
	<Spacer />
	<h3 class="text-sm">RECENT WORK</h3>
	<Spacer />
	<div class="recent-work">
		<PhotoTile
			url={'https://images.unsplash.com/photo-1598586700390-7172442db3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'}
			text="LEHI UTAH | WEDDING"
		/>
		<PhotoTile
			url="https://images.unsplash.com/photo-1551890946-3e5446d3a71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
			text="NEBRASKA | ENGAGEMENT SHOOT"
		/>
		<PhotoTile
			url="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			text="DESERT POP-UP WEDDING | SUPERSITION MOUNTAIN WEDDING"
		/>
	</div>
	<Spacer />
	<Divider />
</Page>

<style lang="postcss">
	.image {
		background-image: url('https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60');
		@apply max-w-5xl w-full h-96 md:h-96 bg-cover bg-center;
	}
	.recent-work {
		/* @apply flex flex-col md:flex-row md:space-x-6 max-w-5xl w-full md:space-y-0 justify-between px-4; */
		@apply flex flex-wrap justify-center items-center;
	}
</style>
