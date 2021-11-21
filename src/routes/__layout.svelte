<script>
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';
	import '../app.postcss';
</script>

<Navigation />
<main class="relative flex flex-col w-screen max-w-full items-center">
	<slot />
	<Footer />
</main>
