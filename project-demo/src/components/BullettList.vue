<template>
	<ul>
		<li v-for="(item, i) in list" :key="i">{{ item }}</li>
	</ul>
</template>


<style scoped lang="sass">
@import ../styleguide/index.sass

ul
	margin: 40px
	+robotoCond-reg


</style>


<script>
export default {
	name: 'BullettList',
	props: [
		'list'
	],
	data() {
		return {}

	}
}
</script>
