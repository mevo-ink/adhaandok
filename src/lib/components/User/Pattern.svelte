<script>
  export let user

  import { activeUser, colorScheme } from '$lib/store'

  const colors = {
    'default-pattern-primary': '#2DD2D2',
    'default-pattern-secondary': '#4CC3FF',
    'inactive-pattern-primary': '#4D4D4D',
    'inactive-pattern-secondary': '#747474',
    'partner-pattern-primary': '#AF6CE0',
    'partner-pattern-secondary': '#F799FF',
    'parent-pattern-primary': '#C1E89A',
    'parent-pattern-secondary': '#048D01',
    'child-pattern-primary': '#63169F',
    'child-pattern-secondary': '#68008C',
    'sibling-pattern-primary': '#9F6816',
    'sibling-pattern-secondary': '#898C00'
  }

  let color
	$: color = $activeUser?.name ? ($colorScheme[user.id] ? $colorScheme[user.id] : 'inactive') : 'default'
</script>

<svg class='absolute -z-10 w-36 -top-3' height='100' viewBox='0 0 210 100' fill='none'>
  <path d='M61 -21L167.128 86L248.574 3.88372' stroke='url(#paint0_linear_401_2)' stroke-opacity='0.3' stroke-width='30'/>
  <path d='M138.574 153L32.4468 46L-49 128.116' stroke='url(#paint1_linear_401_2)' stroke-opacity='0.3' stroke-width='30'/>
  <defs>
    <linearGradient id='paint0_linear_401_2' x1='102.823' y1='-21' x2='102.999' y2='86.0009'>
      <stop class={colors[`${color}-pattern-primary`]} />
    </linearGradient>
    <linearGradient id='paint1_linear_401_2' x1='96.7513' y1='153' x2='96.575' y2='45.9991'>
      <stop class={colors[`${color}-pattern-secondary`]} />
    </linearGradient>
  </defs>
</svg>
