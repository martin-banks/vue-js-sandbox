<template>
	<div id="example-1">
		<button @click="toggle">
			Toggle render
		</button>
			<div :class="wrapperclass" >
				<transition name="bounce">
					<div v-if="show">
						<p>Some animated text</p>
						<p>
							It is possible for a component to specify requirements for the props it is receiving. If a requirement is not met, Vue will emit warnings. This is especially useful when you are authoring a component that is intended to be used by others.
						</p>
					</div>
				</transition>
			</div>

	</div>
</template>


<script>
export default {
  name: 'Animator',
  data() {
    return {
			show: true,
			maxheight: 'max-height: 1000px',
			wrapperclass: 'wrapper-open'
    }
	},
	methods: {
		toggle() {
			this.show = !this.show
			this.maxheight = this.show ? 'max-height: 1000px' : 'max-height: 50px'
			this.wrapperclass = this.show ? 'wrapper-open' : 'wrapper-closed'
		}
	}
}
</script>

<style lang="sass" scoped>
@import '../style.sass'
// .wrapper
// 	transition: all 0.5s
// 	position: relative
// 	max-width: 400px
// 	margin: 0 auto
// 	border: solid 1px
// 	padding: 24px
// 	box-sizing: border-box
// 	// height: 0
// 	// max-height: 1000px

.wrapper-open, .wrapper-closed
	position: relative
	max-width: 400px
	margin: 0 auto
	border: solid 1px
	padding: 24px
	box-sizing: border-box

// control animations with delays? for smoother change
.wrapper-open
	transition: all 2s
	max-height: 1000px
.wrapper-closed
	transition: all 2s
	max-height: 50px

.expander-enter-active
	transition: all .3s ease
	max-height: 200px
.expander-leave-active
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.expander-enter
	max-height: 1000px

.expander-leave-to
	max-height: 200px

</style>
