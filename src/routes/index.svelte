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

	export let document;
</script>

<svelte:head>
	<title>Home | T&C</title>
</svelte:head>

<section class="home">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="image"
		src="https://images.unsplash.com/photo-1597861405049-0b011428568f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
		alt="home-photo"
	/>

	<div class="spacer" />
	<div class="line" />
	<!-- <div class="spacer" /> -->
	<h3 class="text-sm">RECENT WORK</h3>
	<!-- <div class="spacer" /> -->
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

	<div class="spacer" />
	<div class="line" />
</section>

<style lang="postcss">
	.home {
		max-width: 100vw;
		@apply flex flex-col items-center space-y-6 relative;
	}
	.image {
		@apply max-w-5xl w-full px-2;
	}
	.recent-work {
		/* @apply flex flex-col md:flex-row md:space-x-6 max-w-5xl w-full md:space-y-0 justify-between px-4; */
		@apply flex flex-wrap justify-center items-center;
	}
	.recent-img {
		@apply lg:w-72 lg:h-72 md:w-64 md:h-64 w-full h-60 bg-red-600;
	}
</style>
