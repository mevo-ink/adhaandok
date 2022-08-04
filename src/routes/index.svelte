<script>
	import { onMount } from 'svelte'
	import { users, activeUser, d3Scale } from '$lib/store'
	import { getUsers } from '$lib/data'
	// import { zoom, zoomTransform } from 'd3-zoom'
	import { select } from 'd3-selection'

	import User from '$lib/components/User.svelte'
	import SearchBar from '$lib/components/SearchBar.svelte'

	let zoom
	let zoomTransform

	onMount(async () => {
		$users = await getUsers()
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
			.style(
				'transform',
				'translate(' + transform.x + 'px,' + transform.y + 'px) scale(' + transform.k + ')'
			)
			.style('transform-origin', '0 0')
	}

	const clearActiveUser = () => {
		$activeUser = {}
	}
</script>

<!-- This is the container that holds GraphView and we have disabled right click functionality to prevent a sticking behavior -->
<div
	id="Nodes"
	class="absolute h-full w-full cursor-move"
	on:contextmenu|preventDefault
	on:click={clearActiveUser}
>
	<!-- This container is transformed by d3zoom -->
	<div id="Node">
		{#each $users as user}
			<User {user} isActive={user.name.toLowerCase().includes(activeSearch.trim())} />
		{/each}
	</div>
</div>

<SearchBar bind:value={activeSearch} />
