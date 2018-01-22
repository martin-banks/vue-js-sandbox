<template>
	<div class="imageGrid">
		<div 
			v-for="(image, i) in images" 
			class="wrapper" 
			:data-active="active === i"
			:key="i"
			@click="toggle(i)"
		>
			<img :src="image.src" :alt="image.alt">
			<p>{{ image.alt }}</p>
		</div>
	</div>
</template>


<style scoped lang="sass">
@import ../styleguide/index.sass

$flipTransition: 500ms
.imageGrid
	display: flex
	flex-wrap: wrap
	perspective: 800px

.wrapper
	transition: all $flipTransition linear 0ms
	position: relative
	flex: 1
	height: auto
	width: 50%
	border: solid 1px
	min-width: 200px

img
	position: relative
	width: 100%

p
	transition: opacity 0ms linear $flipTransition/2
	position: absolute
	width: 100%
	top: 50%
	transform: translateY(-50%)
	padding: 0
	margin: 0
	text-align: center

.wrapper[data-active=true]
	// transform: rotate3d(0, 1, 0, 180deg)
	transform: rotateY(180deg)
	z-index: 100
	p
		opacity: 0


</style>


<script>
export default {
	name: 'ImageGrid',
	props: [
		'images',
	],
	data() {
		return {
			active: null,
		}
	},
	methods: {
		toggle: function(index) {
			if (index === this.active) {
				this.active = null
				return
			} 
			this.active = index
		}
	}
}
</script>
