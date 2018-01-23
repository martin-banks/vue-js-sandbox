<template>
	<div class="imgOverlay">
		<div class="imgOverlay imgOverlay__wrapper">

			<div class="imgOverlay__image">
				<img :src="src" :alt="caption">
				<img :class="open ? 'image__blur image__open' : 'image__blur image__closed'" :src="src" :alt="caption">
			</div>

			<div class="imgOverlay__overlay">
				<div class="imgOverlay__wrapper">
					<div v-if="open">
						<h2>{{ title }}</h2>
						<p v-for="(par, i) in text" :key="i">{{ par }}</p>
					</div>
					<div v-else>
						<h2>{{ title }}</h2>
						<p>{{ caption }}</p>
					</div>
				</div>

				<button v-if="!open" @click="toggle">Show more</button>
				<button v-else @click="toggle">Hide info</button>
			</div>

		</div>
	</div>
</template>



<style scoped lang="sass">
@import '../styleguide/index.sass'

.imgOverlay
	transition: all 300ms
	+reset
	position: relative
	+robotoCond-reg
	overflow: hidden
	&__wrapper
		margin-bottom: $space-2
	&__image
		+reset
		display: block
		overflow: hidden
		img
			display: block
			margin: 0
	&__overlay
		transition: all 300ms
		+reset
		position: absolute
		top: 50%
		transform: translateY(-50%)
		background: linear-gradient(90deg, rgba($color-black, 0.4), rgba($color-black, 0) 50%)
		color: $color-white
		padding: $space-4
		width: 100%

h2
	+shadow-text-1
	text-transform: uppercase

p
	margin-bottom: $space-2
	font-family: sans-serif
	font-weight: 300
	font-size: 16px
	line-height: 1.4
	+shadow-text-1


button
	padding: $space-1 $space-4
	background: $color-white
	color: $color-black
	+corner-round-3

	+shadow-box-1

.image
	transition: all 300ms
	display: block
	position: relative
	margin: 0
	&__blur
		position: absolute
		top: 0
		transition: all 300ms
		filter: blur(4px)
	&__open
		opacity: 1
	&__closed
		opacity: 0

</style>


<script>

export default {
	name: 'ImageOverlay',
	props: [
		'title',
		'caption',
		'src',
		'text'
	],
	data() {
		return {
			open: false
		}
	},
	methods: {
		toggle() {
			this.open = !this.open
		}
	}
}
</script>
