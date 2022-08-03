<script>
	export let user

	const onUserClick = () => {
		alert(`User ${user.name} clicked`)
	}
</script>

<div
	on:click={onUserClick}
	class=" absolute h-[200px] w-[150px] cursor-pointer rounded-lg border border-gray-200 shadow-sm"
	style="left: {user.position.x}px;
    top: {user.position.y}px; "
>
	<h1>{user.name}</h1>
</div>
