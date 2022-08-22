<script>
	export let user

	import { activeUser, colorScheme } from '$lib/store'
	import { USER_CARD_SIZE } from '$lib/constants'
	import dateFormatter from '$lib/utils/dateFormatter'

	import Pattern from '$lib/components/User/Pattern.svelte'
	
	const onUserClick = () => {
		$activeUser = {}
		$colorScheme = {}
		$activeUser = user
		$colorScheme = {
			...$colorScheme,
			[user.id]: 'default'
		}
		if (user.partner) {
			$colorScheme = {
				...$colorScheme,
				[user.partner]: 'partner'
			}
		}
		user.parents.forEach(parent => {
			$colorScheme = {
				...$colorScheme,
				[parent]: 'parent'
			}
		})
		user.children.forEach(child => {
			$colorScheme = {
				...$colorScheme,
				[child]: 'child'
			}
		})
		user.siblings.forEach(sibling => {
			$colorScheme = {
				...$colorScheme,
				[sibling]: 'sibling'
			}
		})
	}

	let color
	$: color = $activeUser?.name ? ($colorScheme[user.id] ? $colorScheme[user.id] : 'inactive') : 'default'
</script>

<button
	on:click|stopPropagation={onUserClick}
	class='
		w-full
		h-full
		px-1
		pt-1
		absolute
		grid
		grid-rows-3
		drop-shadow-lg
		bg-black
		bg-[url(./cardBG.jpg)]
		bg-cover
		bg-bottom
		rounded-md
		overflow-hidden
	'
	style='
		left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
	'
	class:animate-shakeY={$activeUser?.id === user.id}
>
	<img src={user.avatar} alt={user.name} class='w-full h-full row-span-2 rounded-md drop-shadow-lg' />
	<div
		class='
			w-full
			h-full
			-mt-1
			pt-1
			relative
			-z-20
			rounded-b-md
			text-white
			bg-gradient-to-r
			{`from-${color}-banner-primary`}
			{`to-${color}-banner-secondary`}
			text-center
			overflow-hidden
		'
		style='text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)'
	>
		<h1 class='text-title mt-1.5'> {user.name} </h1>
		<h1 class='text-sub font-light'> {dateFormatter(user.birthDate)} </h1>
		<h1 class='text-title mt-1.5'> {user.location.substring(0, user.location.indexOf(','))} </h1>
		<h1 class='text-sub font-light'> {user.location.substring(user.location.indexOf(',') + 1, user.location.length)} </h1>
		<Pattern />
	</div>
</button>
