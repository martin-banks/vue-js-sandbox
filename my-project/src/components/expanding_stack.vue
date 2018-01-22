
<template>
	<div>
		<button @click="show = !show">
			Toggle hello
		</button>
		<!-- <transition name="somenewclass"> -->
			<p class="somenewclass" v-if="show">hello</p>
		<!-- </transition> -->
		<h1>{{ header }}</h1>
		<transition name="bounce">
			<p v-if="show">
				Animated paragraph Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
			</p>
		</transition>
		<section class="wrapper">
			<h1>some headline {{ content.title }}</h1>
			<p>{{ content.intro }}</p>
		</section>

		<div id="demo">
			<button v-on:click="show = !show">
				Toggle
			</button>
			<transition name="anim">
				<p v-if="show">This should animate</p>
			</transition>

			
		</div>

		<section class="newModuleStlye">
			<animated-card 
				v-for="(card, index) in content.cards"
				v-bind:title="card.title"
				:par="card.par"
				:open="card.par.seen"
				v-bind:key="index"
				:label="'testing'"
			/>
			<!-- <button
				@toggle="toggle"
			>Toggle words</button> -->
		</section>

		<button v-on:click="changeRandom">Toggle random</button>
		<button v-on:click="changeAll">Toggle all</button>

	</div>
</template>


<script>
	import content from '../content/expanding_stack'
	import AnimatedCard from './AnimatedCard'

	export default {
		data () {
			return {
				header: 'Hello world',
				content,
				show: true,
			}
		},
		components: {
			'animated-card': AnimatedCard,
		},
		methods: {
			changeRandom () {
				const random = Math.floor(Math.random() * (this.content.cards.length - 1))
				const card = this.content.cards[random]
				console.log('click', card.par)
				card.par.seen = !card.par.seen 
			},
			changeAll () {
				this.show = !this.show
				this.content.cards.forEach(c => c.par.seen = !c.par.seen)
			}
		},
		mounted() {
			this.show = false
			this.content.cards.forEach(c => {
				console.log('before', c.par.seen)
				c.par.seen = !c.par.seen
				console.log('before', c.par.seen)
			})
			this.header = 'Goodbye'
			this.content.cards[0].par.text = 'Something new'
		}
	}

</script>



<style scoped>
	.somenewclass {
		border: solid 1px
	}
</style>
