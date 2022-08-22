const withAnimations = require('animated-tailwindcss')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'from-default-banner-primary',
		'to-default-banner-secondary',
		'from-inactive-banner-primary',
		'to-inactive-banner-secondary',
		'from-partner-banner-primary',
		'to-partner-banner-secondary',
		'from-parent-banner-primary',
		'to-parent-banner-secondary',
		'from-child-banner-primary',
		'to-child-banner-secondary',
		'from-sibling-banner-primary',
		'to-sibling-banner-secondary',

		'bg-default-background',
		'bg-inactive-background',
		'bg-partner-background',
		'bg-parent-background',
		'bg-child-background',
		'bg-sibling-background'
	],
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
			backgroundImage: {
        'default-background': 'url(./default.jpg)',
        'inactive-background': 'url(./inactive.jpg)',
        'partner-background': 'url(./partner.jpg)',
        'parent-background': 'url(./parent.jpg)',
        'child-background': 'url(./child.jpg)',
        'sibling-background': 'url(./sibling.jpg)'
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
