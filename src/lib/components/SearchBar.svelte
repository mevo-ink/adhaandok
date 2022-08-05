<script>
	export let value
</script>

<div
	class="absolute flex items-center justify-center gap-2 rounded-md bg-gray-200 px-4 py-2 shadow-lg focus-within:bg-white"
>
	<svg
		fill="none"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="2"
		viewBox="0 0 24 24"
		class="focus:shadow-outline h-6 w-6 p-1 focus:outline-none"
		><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg
	>
	<input
		bind:value
		type="search"
		class="rounded-md bg-gray-200 py-2 text-sm text-black focus:bg-white focus:outline-none"
		placeholder="Search..."
		autocomplete="off"
	/>
</div>
