<script>
	import PhotoTile from '$components/PhotoTile.svelte';
</script>

<svelte:head>
	<title>HOME | T&C</title>
</svelte:head>

<section class="home">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		class="image"
		src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
		alt="home-photo"
	/>

	<div class="spacer" />

	<h3 class="text-sm">RECENT WORK</h3>
	<div class="recent-work">
		<PhotoTile
			url={'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VkZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
			text="LEHI UTAH | WEDDING"
		/>
		<PhotoTile
			url="https://images.unsplash.com/photo-1546032996-6dfacbacbf3f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			text="NEBRASKA | ENGAGEMENT SHOOT"
		/>
		<PhotoTile
			url="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
			text="DESERT POP-UP WEDDING | SUPERSITION MOUNTAIN WEDDING"
		/>
	</div>

	<div class="spacer" />
	<p class="text-xs font-medium mx-4 text-center">
		Salt Lake City, Utah - Husband + Wife - Wedding Photographers/Videographers
	</p>
	<div class="social-icons">
		<div class="social-icon" />
		<div class="social-icon" />
		<div class="social-icon" />
		<div class="social-icon" />
		<div class="social-icon" />
	</div>
</section>

<style lang="postcss">
	.home {
		max-width: 100vw;
		@apply flex flex-col items-center space-y-12 relative;
	}
	.image {
		@apply px-5 max-w-5xl w-full;
	}
	.recent-work {
		@apply flex flex-col space-y-4 md:flex-row md:space-x-6 max-w-4xl w-full md:space-y-0 justify-between px-5;
	}
	.recent-img {
		@apply lg:w-72 lg:h-72 md:w-64 md:h-64 w-full h-60 bg-red-600;
	}
	.spacer {
		@apply divider w-64 sm:w-96 md:w-full max-w-2xl;
	}
	.social-icons {
		@apply flex w-full justify-center items-center space-x-2 pb-10;
	}
	.social-icon {
		@apply h-8 w-8 rounded-full bg-black cursor-pointer;
	}
</style>
