<script>
	export let user
	// export let isActive = true

	import { activeUser } from '$lib/store'
	import { USER_CARD_SIZE } from '$lib/constants'

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
		<svg class='absolute -z-10 w-36 -top-3' height='100' viewBox='0 0 210 100' fill='none'>
			<path d='M61 -21L167.128 86L248.574 3.88372' stroke='url(#paint0_linear_401_2)' stroke-opacity='0.3' stroke-width='30'/>
			<path d='M138.574 153L32.4468 46L-49 128.116' stroke='url(#paint1_linear_401_2)' stroke-opacity='0.3' stroke-width='30'/>
			<defs>
				<linearGradient id='paint0_linear_401_2' x1='102.823' y1='-21' x2='102.999' y2='86.0009' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#2DD2D2'/>
					<stop offset='1' stop-color='#4AB5FE'/>
					<stop offset='1' stop-color='#4CC4FF'/>
				</linearGradient>
				<linearGradient id='paint1_linear_401_2' x1='96.7513' y1='153' x2='96.575' y2='45.9991' gradientUnits='userSpaceOnUse'>
					<stop stop-color='#2DD2D2'/>
					<stop offset='1' stop-color='#4AB5FE'/>
					<stop offset='1' stop-color='#4CC4FF'/>
				</linearGradient>
			</defs>
		</svg>
			
	</div>
</button>
