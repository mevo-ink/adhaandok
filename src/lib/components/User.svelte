<script>
	export let user
	export let isActive = true

	import { USER_CARD_SIZE } from '$lib/constants'

	const onUserClick = () => {
		alert(`User ${user.name} clicked`)
	}
</script>

<div
	on:click={onUserClick}
	class="absolute flex cursor-pointer flex-col rounded-lg border border-gray-200 bg-black shadow-lg"
	class:opacity-10={!isActive}
	style="left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
		"
>
	<div class="relative h-full">
		<h1 class="absolute w-full bg-gray-900/70 text-center text-white">{user.name}</h1>
		<p class="absolute bottom-6 w-full bg-gray-900/70 text-center text-white">
			{user.location}
		</p>
		<h2 class="absolute bottom-0 w-full bg-gray-900/70 text-center text-white">
			{user.birthDate.toLocaleDateString()}
		</h2>

		<img src={user.avatar} alt={user.name} class="h-full w-full" />
	</div>
</div>
