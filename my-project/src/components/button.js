import Vue from 'vue'

export default Vue.component('quiz-button', {
	props: ['text'],
	template: `
		<button v-on:click="check">
			{{ text }}
		</button>
	`,
	methods: {
		check (e) {
			this.$emit('clicked', this.text)
		}
	}
})