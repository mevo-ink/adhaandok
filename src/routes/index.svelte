<script>
	import { onMount } from 'svelte'
	import { users, d3Scale } from '$lib/store'
	import { getUsers } from '$lib/data'
	import { zoom, zoomTransform } from 'd3-zoom'
	import { select } from 'd3-selection'

	import User from '$lib/components/User.svelte'

	onMount(() => {
		$users = getUsers()
		select('#Nodes').call(d3Zoom)
	})

	// TODO: Update d3Zoom type (refer to d3Zoom docs)
	let d3Zoom = zoom().scaleExtent([0.4, 4]).on('zoom', handleZoom)

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
</script>

<!-- This is the container that holds GraphView and we have disabled right click functionality to prevent a sticking behavior -->
<div id="Nodes" class="absolute h-full w-full" on:contextmenu|preventDefault>
	<!-- This container is transformed by d3zoom -->
	<div id="Node">
		{#each $users as user}
			<User {user} />
		{/each}
	</div>
</div>
