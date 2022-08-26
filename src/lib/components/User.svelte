<script>
	export let user

	import { USER_CARD_SIZE } from '$lib/constants'
	import { activeUser, colorScheme } from '$lib/store'
	import dateFormatter from '$lib/utils/dateFormatter'

	import Pattern from '$lib/components/User/Pattern.svelte'

	const onUserClick = () => {
		$activeUser = {}
		$colorScheme = {}
		$activeUser = user
		$colorScheme = { [user.id]: 'default' }
		if (user.partner) $colorScheme = Object.assign($colorScheme, { [user.partner]: 'partner' })
		user.parents.forEach((parent) => {
			$colorScheme = Object.assign($colorScheme, { [parent]: 'parent' })
		})
		user.children.forEach((child) => {
			$colorScheme = Object.assign($colorScheme, { [child]: 'child' })
		})
		user.siblings.forEach((sibling) => {
			$colorScheme = Object.assign($colorScheme, { [sibling]: 'sibling' })
		})
	}

	let relation
	$: relation = $activeUser?.name
		? $colorScheme[user.id]
			? $colorScheme[user.id]
			: 'inactive'
		: 'default'
</script>

<button
	on:click|stopPropagation={onUserClick}
	class="
		absolute
		grid
		h-full
		w-full
		grid-rows-3
		bg-black
		px-1
		pt-1
		drop-shadow-lg
		bg-{relation}-background
		overflow-hidden
		rounded-md
		bg-cover
		bg-bottom
		{relation === 'inactive' && 'scale-75'}
		duration-500
		ease-in-out
	"
	style="
		left: {user.x}px;
    top: {user.y}px;
		width: {USER_CARD_SIZE.width}px;
		height: {USER_CARD_SIZE.height}px;
	"
>
	<img
		src={user.avatar}
		alt={user.name}
		class="
			row-span-2
			h-full
			w-full
			rounded-md
			drop-shadow-lg
			{relation === 'inactive' && 'saturate-0'}
		"
	/>
	<div
		class="
			relative
			-z-20
			-mt-1
			h-full
			w-full
			rounded-b-md
			bg-gradient-to-br
			pt-1
			text-white
			from-{relation}-banner-primary
			to-{relation}-banner-secondary
			overflow-hidden
			text-center
		"
		style="text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25)"
	>
		<h1 class="mt-2 text-title">{user.name}</h1>
		<h1 class="text-sub font-light">{dateFormatter(user.birthDate)}</h1>
		<h1 class="mt-1.5 text-title">{user.location.substring(0, user.location.indexOf(','))}</h1>
		<h1 class="text-sub font-light">
			{user.location.substring(user.location.indexOf(',') + 1, user.location.length)}
		</h1>
		<Pattern {relation} />
	</div>
</button>
