<script context="module">
	const links = [
		{ path: '/', title: 'HOME' },
		{ path: '/photo', title: 'PHOTO' },
		{ path: '/video', title: 'VIDEO' },
		{ path: '/beauty', title: 'BEAUTY' },
		{ path: '/contact', title: 'CONTACT' }
	];
</script>

<script>
	import { cubicInOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	// state
	let route = '/';
	let isOpen;
	let width;

	// tracks the width and sets width state
	onMount(() => {
		if (browser) {
			width = window.innerWidth;
			const setWidth = () => (width = window.innerWidth);
			window.addEventListener('resize', setWidth);
		}
	});

	// opens and closes the mobile drawer
	function handleOpen() {
		document.querySelector('body').style.overflow = isOpen ? 'visible' : 'hidden';
		isOpen = !isOpen;
	}

	function handleRoute(path) {
		route = path;
	}

	// reactive statement that force closes the drawer if in desktop view
	$: if (width >= 800) {
		isOpen = false;
		document.querySelector('body').style.overflow = 'visible';
	}
</script>

<!-- Mobile View -->
{#if width < 800}
	<div class="mobile">
		<div class="title-container">
			<span class="title-mobile">
				<h1 class="text-3xl">T</h1>
				<p class="text-sm">&</p>
				<h1 class="text-3xl">C</h1></span
			>
		</div>
		<div class="flex-none">
			<button class="button" on:click={handleOpen}>
				{#if isOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						fill="currentColor"
						class="bi bi-x"
						viewBox="0 0 16 16"
					>
						<path
							d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Drawer -->
	{#if isOpen}
		<div
			transition:slide={{ duraction: 75, easing: cubicInOut }}
			class:mobile-drawer={isOpen}
			class:hide-mobile-drawer={!isOpen}
		>
			<button on:click={handleOpen}>Close</button>
		</div>
	{/if}
{/if}

<!-- Desktop View -->
{#if width >= 800}
	<div class="desktop">
		<div class="title-container">
			<span class="title-desktop">
				<h1>T</h1>
				<p class="text-2xl">&</p>
				<h1>C</h1>
			</span>
		</div>
		<div class="flex-none">
			<ul class="nav-links">
				{#each links as link}
					<a
						class:bold={route == link.path}
						class="nav-link"
						href={link.path}
						on:click={() => handleRoute(link.path)}>{link.title}</a
					>
				{/each}
			</ul>
		</div>
	</div>
{/if}

<style lang="postcss">
	.mobile {
		@apply navbar mb-2 bg-white text-base-content relative flex justify-between w-full;
	}
	.desktop {
		@apply navbar my-4 flex flex-col space-y-6;
	}
	.title-container {
		@apply flex-1 px-2 mx-2;
	}
	.title-mobile {
		@apply text-xl font-bold flex justify-center items-center tracking-wider;
	}
	.title-desktop {
		@apply text-7xl font-bold flex justify-center items-center tracking-wider;
	}
	.button {
		@apply btn btn-square btn-ghost;
	}
	.nav-links {
		@apply flex space-x-10 cursor-pointer text-xs;
	}
	.nav-link {
		@apply opacity-40 hover:opacity-100;
	}
	.mobile-drawer {
		@apply w-screen h-screen z-10 fixed bg-white top-16 opacity-100 transition duration-75;
	}
	.hide-mobile-drawer {
		@apply opacity-0;
	}
	.bold {
		@apply opacity-100;
	}
</style>
