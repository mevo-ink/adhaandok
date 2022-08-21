const withAnimations = require('animated-tailwindcss')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
        'default-primary': '#964CFF',
        'default-secondary': '#4433FF'
      },
			fontSize: {
				title:  ['12px', '14px'],
				sub: ['8px', '10px']
			}
		}
	},

	plugins: []
}

module.exports = withAnimations(config)
