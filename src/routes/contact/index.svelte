<script>
	import Page from '$components/Page.svelte';
	import { submitForm } from '$lib/notion';

	let first = null;
	let last = null;
	let email = null;
	let phone = null;
	let message = null;
	let isSubmitted = false;

	function handleSubmit(e) {
		e.preventDefault();
		if (isDisabled()) {
			return;
		}
		submitForm({ first, last, email, phone, message });
		isSubmitted = true;
	}

	$: isDisabled = () => {
		if (!first || !last || !email || !phone || !message) {
			return true;
		}
		return false;
	};
</script>

<Page>
	{#if isSubmitted}
		<div class="alert alert-success">
			<p>Thank you for contacting us! We will get back to you as soon as we can!</p>
		</div>
	{/if}

	{#if !isSubmitted}
		<form on:submit={handleSubmit} class="max-w-xl px-2 flex flex-col w-full items-end">
			<span class="flex space-y-0 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row w-full ">
				<span class="flex flex-col w-full">
					<label for="first">First name</label>

					<input
						id="first"
						class=" border-2 border-black border-opacity-90 h-10"
						type="text"
						bind:value={first}
					/>
				</span>
				<span class="flex flex-col w-full">
					<label for="last">Last name</label>
					<input
						id="last"
						class=" border-2 border-black border-opacity-90 h-10"
						type="text"
						bind:value={last}
					/>
				</span>
			</span>

			<span class="w-full">
				<label for="phone">Phone number</label>
				<input
					id="phone"
					class=" border-2 border-black border-opacity-90 h-10 w-full"
					type="tel"
					bind:value={phone}
				/>
			</span>

			<span class="w-full">
				<label for="email">Email</label>
				<input
					id="email"
					class=" border-2 border-black border-opacity-90 h-10 w-full"
					type="email"
					bind:value={email}
				/>
			</span>

			<span class="flex flex-col w-full">
				<label for="about">Tell us about yourself</label>
				<textarea
					id="about"
					class=" border-2 border-black border-opacity-90 h-40"
					type="text"
					bind:value={message}
				/>
			</span>

			<button disabled={isDisabled()} class="btn rounded-none bg-black text-white">Sumbit</button>
		</form>
	{/if}
</Page>

<style lang="postcss">
	input {
		padding-left: 0.5rem;
		@apply mb-2;
	}
	textarea {
		padding-left: 0.5rem;
		@apply mb-2;
	}
	label {
		@apply text-gray-800;
	}
</style>
