<template>
	<div>
		<section class="wrapper">
			<h1>{{ title }}</h1>
			<p>{{ intro }}</p>
		</section>

		<section class="wrapper">
			<test-card 
				v-for="(card, index) in cards"
				:content="card"
				:key="index"
			/>
		</section>


	</div>
</template>


<script>
	import content from '../content/expanding_stack'
	export default {
		data () {
			return content
		}
	}
</script>



<style scoped>
	
</style>