<template>
	<div class="test-card">
		<h3>{{ label }} - {{ title.text }}</h3>

		<transition name="anim">
			<p v-if="open">{{ par.text }}</p>
		</transition>
	</div>
</template>


<script>
	export default {
		name: 'animated-card',
		props: [
			'par',
			'title',
			'label',
			'open'
		],
		data() {
			return {
				seen: false
			}
		},
		// methods: {
		// 	toggle() {
		// 		this.seen = !this.seen
		// 	},
		// },
	}



</script>

<style modules lang="sass" scoped>
	@import '../styleguide/index.sass'

	.fade-enter-active, .fade-leave-active
		transition: opacity .5s

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
		opacity: 0



	.test-card 
		border: solid 1px grey !important

	.anim-enter
		opacity: 0 !important
		/* transform: rotate(720deg)*/

	.anim-enter-active
		transition: all 1s !important

	.anim-enter-to
		opacity: 1 !important
		transform: rotate(0deg)

</style>