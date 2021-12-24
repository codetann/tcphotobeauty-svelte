<script>
	const socialMedia = [
		{ icon: 'fab fa-instagram', link: 'https://www.instagram.com/' },
		{ icon: 'far fa-envelope', link: 'mail:https://www.instagram.com/' },
		{ icon: 'fab fa-facebook-square', link: 'https://www.facebook.com/' }
	];
</script>

<div class="my-16">
	<p class="uppercase">Husband + Wife</p>
	<p>-</p>
	<p class="uppercase">Wedding Photographers & Videographers</p>
	<p>-</p>
	<p class="uppercase">Utah</p>
</div>
<div class="social__icons">
	{#each socialMedia as social}
		<a href={social.link} target="_blank">
			<i class={`${social.icon} social__icon`} />
		</a>
	{/each}
</div>

<style lang="postcss">
	p {
		@apply text-xs font-medium mx-4 text-center;
	}
	.social__icons {
		@apply flex w-full justify-center items-center space-x-2 pb-10;
	}
	.social__icon {
		@apply h-10 w-10 rounded-full bg-black cursor-pointer flex justify-center items-center text-white;
	}
</style>
