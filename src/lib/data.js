import { USER_CARD_SIZE } from '$lib/constants'

export const getUsers = () => {
	// generate random 100 users with random names and random age
	const users = []
	for (let i = 0; i < 100; i++) {
		const name = `User ${i}`
		users.push({
			id: i,
			name,
			avatar: `https://randomuser.me/api/portraits/men/${i}.jpg`
		})
	}
	return setInitialPositions(users)
}

const setInitialPositions = (users) => {
	const positionedUsers = []
	// divide the screen into small USER_CARD_SIZE blocks with a gap of 50px between each block
	// and then place each user in one of the available blocks
	for (let i = 0; i < users.length; i++) {
		const user = users[i]
		const block = getBlock(i)

		positionedUsers.push({
			...user,
			x: 0 + block.x,
			y: 0 + block.y
		})
	}

	return positionedUsers
}

const getBlock = (index) => {
	const blockSize = {
		width: USER_CARD_SIZE.width,
		height: USER_CARD_SIZE.height
	} // width and height of each block
	const gap = 20 // gap between each block
	const numBlocks = {
		width: Math.floor(window.innerWidth / (blockSize.width + gap)) + 10, // extra 10 blocks to make horizontal more width than vertical
		height: Math.floor(window.innerHeight / (blockSize.height + gap)) + 1
	} // number of blocks in each row and column
	const block = {
		x: (index % numBlocks.width) * (blockSize.width + gap),
		y: Math.floor(index / numBlocks.width) * (blockSize.height + gap)
	} // position of the block in the screen
	return block
}
