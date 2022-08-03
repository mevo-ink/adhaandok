import { writable } from 'svelte/store'

export const d3Scale = writable(1)

export const users = writable([
	{
		id: 1,
		name: 'John Doe',
		position: {
			x: 50,
			y: 50
		}
	},
	{
		id: 2,
		name: 'Jane Doe',
		position: {
			x: 300,
			y: 100
		}
	},
	{
		id: 3,
		name: 'Jack Doe',
		position: {
			x: 100,
			y: 350
		}
	}
])
