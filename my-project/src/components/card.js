import Vue from 'vue'



export default Vue.component('test-card', {
	name: 'test-card',
	props: ['content'],
	template: `<div class="test-card">
		<h3>{{ reverseText(content.title.text) }}</h3>
		<p v-if="content.par.seen">
			{{ reverseText(content.par.text) }}
		</p>
		<button
			v-on:click="toggle"
		>Toggle</button>
	</div>`,
	methods: {
		toggle () {
			console.log('click', this)
			this.content.par.seen = !this.content.par.seen
		},
		reverseText (text) {
			return text
				.split('')
				.reverse()
				.join('')
		}
	}
})
