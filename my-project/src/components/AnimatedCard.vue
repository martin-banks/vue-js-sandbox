<template>
	<div class="test-card">
		<h3>{{ label }} - {{ content.title.text }}</h3>

		<transition name="anim">
			<p v-if="seen">{{ content.par.text }}</p>
		</transition>

		<button
			v-on:click="toggle"
		>Toggle words</button>
	</div>
</template>


<script>
	export default {
		name: 'animated-card',
		props: ['content', 'label'],
		data() {
			return {
				seen: false
			}
		},
		methods: {
			toggle() {
				this.seen = !this.seen
			},
		},
	}



</script>

<style modules lang="sass" scoped>
	@import '../styleguide/index.sass'


</style>