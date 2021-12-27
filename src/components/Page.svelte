<script>
	import { fade } from 'svelte/transition';
</script>

<!-- <section class="page" in:fade={{ duration: 500, delay: 500 }} out:fade={{ duration: 500 }}>
	<slot />
</section> -->

<section class="page">
	<slot />
</section>

<style lang="postcss">
	.page {
		@apply w-full max-w-6xl flex flex-col justify-center items-center;
	}
</style>
