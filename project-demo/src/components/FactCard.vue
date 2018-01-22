<template>
	<div class="container">
		<h6>
			<slot name="kicker">Fact card</slot>
		</h6>
		<slot name="title" />
		<div>
			<h2>Facts</h2>
			<slot name="body" />
		</div>
	</div>
</template>

<style scoped lang="sass">
@import ../styleguide/index.sass

.container
	border: solid 1px
	padding: 24px

</style>


<script>
export default {
  name: 'FactCard',
	props: [],
}

</script>

