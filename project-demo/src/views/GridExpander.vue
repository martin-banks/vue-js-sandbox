<template>
	<div class="gridExpander">
		<div 
			:class="{ grid__item: true, 'grid__item--open': i === openIndex }" 
			v-for="(tile, i) in content.grid"
			:key="i"
			@click="toggle(i)"
		>

			<div class="grid__tile">
				<img :src="tile.image" alt="">
				<span v-if="i === openIndex">{{ i }}</span>
			</div>

			<div :class="{ 'grid__reveal': true }">
				<h2>{{ i }}. {{ tile.title }}</h2>
				<p v-for="(par, parIndex) in tile.text" :key="parIndex">
					{{ par }}
				</p>
			</div>


		</div>
	</div>
</template>


<style scoped lang="sass">
@import '../styleguide/index.sass'

.gridExpander
	position: relative
	// display: flex
	// flex-wrap: wrap

.grid
	&__item
		transition: all 500ms
		// flex: 1
		position: relative
		display: inline-block
		vertical-align: top
		overflow-y: hidden
		overflow-x: visible
		// max-width: 300px
		// min-width: 150px
		width: 300px
		// height: 0
		min-height: 200px
		max-height: 200px
		border: solid 1px
		&--open
			max-height: 1000px
	&__tile
		position: relative
		img
			position: absolute
			display: block
			top: 0
			margin: 0
			z-index: -1
		span
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, 0)
			padding: 4px 16px
			font-size: 40px
			color: white
			background: black
	&__reveal
		position: relative
		width: 600px
		left: 0
		left: 0
		padding: 16px
		margin-top: 200px
		background: rgba(white, 0.6)




</style>



<script>
import content from '@/content/gridExpander'
export default {
	name: 'GridExpander',
	data() {
		return {
			content,
			openIndex: null,
			openHeight: 0
		}
	},
	methods: {
		toggle(index, e) {
			console.log(index, e)
			this.openIndex = this.openIndex === index ? null : index
			this.openHeight = 0
		}
	},
}
</script>
