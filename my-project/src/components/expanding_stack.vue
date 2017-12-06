<template>
	<div>
		<section class="wrapper">
			<h1>{{ title }}</h1>
			<p>{{ intro }}</p>
		</section>

		<section class="newModuleStlye">
			<test-card 
				v-for="(card, index) in cards"
				v-bind:content="card"
				v-bind:key="index"
			/>
		</section>

		<button v-on:click="changeRandom">Toggle random</button>
		<button v-on:click="changeAll">Toggle all</button>

	</div>
</template>


<script>
	import content from '../content/expanding_stack'

	export default {
		data () {
			return content
		},
		methods: {
			changeRandom () {
				console.log('click')
				const random = Math.floor(Math.random() * (this.cards.length - 1))
				this.cards[random].par.seen = !this.cards[random].par.seen 
			},
			changeAll () {
				this.cards.forEach(c => c.par.seen = !c.par.seen)
			}
		}
	}
</script>



<style modules lang="sass" scoped>
	@import '../styleguide/index.sass'

	// sass can be written here

</style>