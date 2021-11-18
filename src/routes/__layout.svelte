<script>
	import '../app.postcss';
	import Navigation from '$components/Navigation.svelte';
</script>

<Navigation />
<main class="relative">
	<slot />
</main>
