import { writable } from 'svelte/store'

export const d3Scale = writable(1)

const innerWidth = 900
const innerHeight = 600
const userCardSize = {
	width: 150,
	height: 200
}

const setInitialPositions = (users) => {
	// set initial positions of users on the screen starting from the center and building in top right bottom left order with a gap of 50px between each user
	const center = {
		x: innerWidth / 2,
		y: innerHeight / 2
	}
	const gap = 50
	const positionedUsers = []
	// place users starting from center and building in top right bottom left order with a gap of 50px between each user
	for (let i = 0; i < users.length; i++) {
		const user = users[i]
		const position = {
			x: center.x,
			y: center.y
		}
		if (i % 2 === 0) {
			position.x -= (userCardSize.width + gap) * (i / 2)
		}
		if (i % 2 === 1) {
			position.x += (userCardSize.width + gap) * (i / 2)
		}
		if (i <= 2) {
			position.y -= (userCardSize.height + gap) * (i / 2)
		}
		if (i > 2) {
			position.y += (userCardSize.height + gap) * (i / 2)
		}
		positionedUsers.push({
			...user,
			...position
		})
	}
	console.log(positionedUsers)
	return positionedUsers
}

const getUserData = () => {
	// generate random 100 users with random names and random age
	const users = []
	for (let i = 0; i < 6; i++) {
		const name = `User ${i}`
		const age = Math.floor(Math.random() * 100)
		users.push({
			id: i,
			name,
			age
		})
	}
	return users
}

export const users = writable(setInitialPositions(getUserData()))
