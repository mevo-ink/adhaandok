<script>
	import { onMount } from 'svelte'
	import { select } from 'd3-selection'
	// import { zoom, zoomTransform } from 'd3-zoom'
	import { USER_CARD_SIZE } from '$lib/constants'
	import { activeUser, colorScheme, d3Scale } from '$lib/store'

	import User from '$lib/components/User.svelte'
	// import SearchBar from '$lib/components/SearchBar.svelte'
	import Loading from '$lib/components/Loading.svelte'

	let isLoading = true
	let zoom
	let zoomTransform

	const users = [
	{
		'id': 1,
		'name': 'Mathi',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Italy, Rapallo, Genova',
		'parents': [],
		'siblings': [],
		'children': [3],
		'partner': 2,
		'avatar': 'https://randomuser.me/api/portraits/men/1.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 3,
		'y': (USER_CARD_SIZE.height + 10) * 1
	},
	{
		'id': 2,
		'name': 'Jeeva',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Italy, Rapallo, Genova',
		'parents': [],
		'siblings': [],
		'children': [3],
		'partner': 1,
		'avatar': 'https://randomuser.me/api/portraits/women/2.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 1,
		'y': (USER_CARD_SIZE.height + 10) * 0
	},
	{
		'id': 3,
		'name': 'Arun Mathiyalakan',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Italy, Rapallo, Genova',
		'parents': [1, 2],
		'siblings': [],
		'children': [],
		'partner': null,
		'avatar': 'https://randomuser.me/api/portraits/men/3.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 1,
		'y': (USER_CARD_SIZE.height + 10) * 1
	},
	{
		'id': 4,
		'name': 'Raj',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Cananda, Toronto, Ontario',
		'parents': [],
		'siblings': [],
		'children': [6, 7],
		'partner': 5,
		'avatar': 'https://randomuser.me/api/portraits/men/4.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 2,
		'y': (USER_CARD_SIZE.height + 10) * 1
	},
	{
		'id': 5,
		'name': 'Vara',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Cananda, Toronto, Ontario',
		'parents': [],
		'siblings': [],
		'children': [6, 7],
		'partner': 4,
		'avatar': 'https://randomuser.me/api/portraits/women/5.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 2,
		'y': (USER_CARD_SIZE.height + 10) * 0
	},
	{
		'id': 6,
		'name': 'Jana Rajakumar',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Cananda, Toronto, Ontario',
		'parents': [4, 5],
		'siblings': [7],
		'children': [],
		'partner': null,
		'avatar': 'https://randomuser.me/api/portraits/men/6.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 0,
		'y': (USER_CARD_SIZE.height + 10) * 1
	},
	{
		'id': 7,
		'name': 'Madhu',
		'birthDate': '2022-02-12T00:00:00Z',
		'deathDate': '2022-02-12T00:00:00Z',
		'marriageDate': '2022-02-12T00:00:00Z',
		'location': 'Srilanka, Toronto, Ontario',
		'parents': [4, 5],
		'siblings': [6],
		'children': [],
		'partner': null,
		'avatar': 'https://randomuser.me/api/portraits/men/7.jpg',
		'x': (USER_CARD_SIZE.width + 10) * 0,
		'y': (USER_CARD_SIZE.height + 10) * 0
	}
]

	const sleep = (ms) => new Promise((f) => setTimeout(f, ms))

	onMount(async () => {
		await sleep(2000) // simulate network delay
		isLoading = false
		let d3Zoom = await import('d3-zoom')
		zoom = d3Zoom.zoom
		zoomTransform = d3Zoom.zoomTransform
		select('#Nodes').call(zoom().scaleExtent([0.4, 4]).on('zoom', handleZoom))
	})

	let activeSearch = ''

	// function to handle zoom events - arguments: d3ZoomEvent
	function handleZoom(e) {
		// add a store that contains the current value of the d3-zoom's scale to be used in onMouseMove function
		d3Scale.set(e.transform.k)
		// transform div elements (nodes)
		let transform = zoomTransform(this)
		// selects and transforms all node divs from class 'Node' and performs transformation
		select('#Node')
			.style('transform', 'translate(' + transform.x + 'px,' + transform.y + 'px) scale(' + transform.k + ')')
			.style('transform-origin', '0 0')
	}

	const clearActiveUser = () => {
		$activeUser = {}
		$colorScheme = {}
	}
</script>

{#if isLoading}
	<Loading />
{:else}
	<!-- This is the container that holds GraphView and we have disabled right click functionality to prevent a sticking behavior -->
	<div
		id='Nodes'
		class='absolute h-full w-full cursor-move'
		on:contextmenu|preventDefault
		on:click={clearActiveUser}
	>
		<!-- This container is transformed by d3zoom -->
		<div id='Node'>
			{#each users as user}
				<User {user} isActive={user.name?.toLowerCase().includes(activeSearch.trim())} />
			{/each}
		</div>
	</div>

	<!-- <SearchBar bind:value={activeSearch} /> -->
{/if}
