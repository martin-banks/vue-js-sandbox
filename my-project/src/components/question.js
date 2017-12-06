import Vue from 'vue'
import Styles from '../styleguide/index.sass'


export default Vue.component('question', {
	name: 'question',
	props: ['item', 'score'],
	template: `<div class="">
		<h2 class="${Styles.question__test}">{{ item.question }}</h2>
		<quiz-button
			v-for="(option, index) in item.options"
			:text="option"
			:key="index"
			@clicked="clicked"
		/>
	</div>`,

	methods: {
		clicked (answer) {
			if (this.item.disabled) return
			const isCorrect = answer === this.item.answer
			if (isCorrect) {
				this.$emit('answer', answer)
				this.item.disabled = true
			}
		}
	},
})


