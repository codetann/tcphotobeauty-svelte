<script>
	import { fade } from 'svelte/transition';
</script>

<section class="page">
	<slot />
</section>

<style lang="postcss">
	.page {
		@apply w-full max-w-6xl flex flex-col justify-center items-center;
	}
</style>
