const withAnimations = require('animated-tailwindcss')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
        'default-banner-primary': '#964CFF',
        'default-banner-secondary': '#4433FF',
				'inactive-banner-primary': '#A6A6A6',
        'inactive-banner-secondary': '#999999',
				'partner-banner-primary': '#FF3399',
        'partner-banner-secondary': '#FF4C4D',
				'parent-banner-primary': '#D5FF00',
        'parent-banner-secondary': '#00CC21',
				'child-banner-primary': '#FA00FF',
        'child-banner-secondary': '#9E00E8',
				'sibling-banner-primary': '#FF5C00',
        'sibling-banner-secondary': '#FAFF00'
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
