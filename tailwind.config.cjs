const withAnimations = require('animated-tailwindcss')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
}

module.exports = withAnimations(config)
