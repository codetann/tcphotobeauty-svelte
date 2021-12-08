<script>
  import pricing from './config.json'
  import Page from "$components/Page.svelte";
  import Spacer from "$components/Spacer.svelte";
	import Pricing from '$components/Pricing.svelte';
  import Divider from '$components/Divider.svelte';

  export let photos;
</script>

<svelte:head>
  <title>Beauty | T&C</title>
</svelte:head>

<Page>
  <!-- photos -->
  <Spacer />
  <Pricing isBeautyPricing carte={pricing.carte} />
  <Divider />
</Page>
