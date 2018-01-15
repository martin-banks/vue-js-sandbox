<template>
	<div>
		<section class="wrapper">
			<h1>some headline {{ content.title }}</h1>
			<p>{{ content.intro }}</p>
		</section>

		<div id="demo">
			<button v-on:click="show = !show">
				Toggle
			</button>
			<transition name="fade">
				<p v-if="show">hello</p>
			</transition>
		</div>

		<section class="newModuleStlye">
			<animated-card 
				v-for="(card, index) in content.cards"
				v-bind:content="card"
				v-bind:key="index"
				:label="'testing'"
			/>
		</section>

		<!-- <button v-on:click="changeRandom">Toggle random</button> -->
		<!-- <button v-on:click="changeAll">Toggle all</button> -->

	</div>
</template>


<script>
	import content from '../content/expanding_stack'
	import AnimatedCard from './AnimatedCard'

	export default {
		data () {
			return {
				content,
				show: true,
			}
		},
		components: {
			'animated-card': AnimatedCard,
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

</style>