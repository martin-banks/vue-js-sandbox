import Vue from 'vue'
import Styles from '../styleguide/index.sass'


export default Vue.component('question', {
	name: 'question',
	props: ['item', 'score'],
	template: `<div class="">
		<h2 class="${Styles.question__test}">{{ item.question }}</h2>
		<button v-on:click="check">{{ item.options[0] }}</button>
		<button v-on:click="check">{{ item.options[1] }}</button>
		<button v-on:click="check">{{ item.options[2] }}</button>
		<button v-on:click="check">{{ item.options[3] }}</button>
		<button v-on:click="check">{{ item.options[4] }}</button>
	</div>`,

	methods: {
		check (e) {
			if (this.item.disabled) return
			console.log('click', e.target.innerText)
			const isCorrect = e.target.innerText === this.item.answer
			if (isCorrect) {
				this.$emit('answer', e.target.innerText)
				this.item.disabled = true
			}
		}
	},
})


