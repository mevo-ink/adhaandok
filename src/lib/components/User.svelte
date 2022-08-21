<script>
	export let user
	// export let isActive = true

	import { activeUser } from '$lib/store'
	import { USER_CARD_SIZE } from '$lib/constants'

	import Pattern from '$lib/components/User/Pattern.svelte'

	const onUserClick = () => $activeUser = user

	const today = new Date(user.birthDate), yyyy = today.getFullYear()
	let mm = today.getMonth() + 1, dd = today.getDate()
	if (dd < 10) dd = '0' + dd
	if (mm < 10) mm = '0' + mm
	const dob = dd + '/' + mm + '/' + yyyy
</script>

<button
	on:click|stopPropagation={onUserClick}
	class='w-full h-full absolute px-1 pt-1 bg-black bg-[url(./cardBG.jpg)] bg-cover bg-bottom rounded-md overflow-hidden grid grid-rows-3 drop-shadow-lg'
	style='left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
	'
	class:animate-shakeY={$activeUser?.id === user.id}
>
	<img src={user.avatar} alt={user.name} class='w-full h-full row-span-2 rounded-md drop-shadow-lg' />
	<div
		class='w-full h-full relative -z-20 rounded-b-md text-white bg-gradient-to-r -mt-1 pt-1 from-default-primary to-default-secondary text-center overflow-hidden'
		style='text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)'
	>
		<h1 class='text-title mt-1.5'> {user.name} </h1>
		<h1 class='text-sub font-light'> {dob} </h1>
		<h1 class='text-title mt-1.5'> {user.location.substring(0, user.location.indexOf(','))} </h1>
		<h1 class='text-sub font-light'> {user.location.substring(user.location.indexOf(',') + 1, user.location.length)} </h1>
		<Pattern />
	</div>
</button>
