<script>
	export let user

	import { USER_CARD_SIZE } from '$lib/constants'

	const onUserClick = () => {
		alert(`User ${user.name} clicked`)
	}
</script>

<div
	on:click={onUserClick}
	class="absolute flex cursor-pointer flex-col rounded-lg border border-gray-200 bg-black shadow-lg"
	style="left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
		"
>
	<h1 class="text-center text-white">{user.name}</h1>
	<img src={user.avatar} alt={user.name} />
</div>
