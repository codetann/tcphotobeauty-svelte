<script>
	export let icon;
	export let style;
	export let onclick;
</script>

<i class={`fas fa-${icon} ${style}`} on:click={onclick} />
