<script></script>

<section class=" flex flex-col justify-center items-center max-w-xl space-y-4 mt-10 w-full px-2">
	<span class="flex space-y-4 sm:space-y-0 sm:space-x-2 flex-col sm:flex-row w-full ">
		<span class="flex flex-col w-full">
			<label for="first">First name</label>
			<input id="first" class=" border-2 border-black border-opacity-90 h-10" type="text" />
		</span>
		<span class="flex flex-col w-full">
			<label for="last">Last name</label>
			<input id="last" class=" border-2 border-black border-opacity-90 h-10" type="text" />
		</span>
	</span>

	<span class="w-full">
		<label for="email">Email</label>
		<input id="email" class=" border-2 border-black border-opacity-90 h-10 w-full" type="text" />
	</span>

	<span class="flex flex-col w-full">
		<label for="about">Tell us about yourselves</label>
		<textarea id="about" class=" border-2 border-black border-opacity-90 h-40" type="text" />
	</span>
</section>

<style lang="postcss">
	input {
		padding-left: 0.5rem;
	}
	label {
		@apply text-gray-800;
	}
</style>
