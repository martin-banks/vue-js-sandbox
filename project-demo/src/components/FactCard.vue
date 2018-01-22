<template>
	<div class="factCard">
		<h6>
			<slot name="kicker">Fact card</slot>
		</h6>
		<slot name="title" />
		<div class="body" :style="bodyHeight" :data-status="bodyStatus">
			<div class="wrapper">
				<slot name="body" />
			</div>
		</div>
		<button @click="toggleBody">Toggle</button>
	</div>
</template>

<style scoped lang="sass">
@import ../styleguide/index.sass

.factCard
	border: solid 1px
	padding: 24px
	+corner-round-1

.body
	transition: max-height 300ms
	height: auto
	overflow: hidden


button
	padding: $space-1 $space-4
	background: $color-blue-reg
	border: none
	+corner-round-3
	+robotoCond-reg
	+fluidtype-1
	color: $color-white





</style>


<script>
export default {
  name: 'FactCard',
	props: [],
	data() {
		return {
			bodyStatus: 'closed',
			bodyHeight: 'max-height:0',
			openHeight: 0,

		}
	},
	methods: {
		toggleBody() {
			this.openHeight = this.$el.querySelector('.wrapper')
				.getBoundingClientRect().height * 1.2
			this.bodyStatus = this.bodyStatus === 'open' ? 'closed' : 'open'
			this.bodyHeight = `max-height: ${this.bodyStatus === 'open' ? `${this.openHeight}px` : '0'}`
			// console.log(this.openHeight)
		}
	},
	created() {
		console.log('created', this.$el)
	},
	mounted() {
		console.log('el:', this.$el)
		this.bodyStatus = 'closed'
	}
}

</script>

