import Vue from 'vue'

export default Vue.component('test-card', {
	name: 'test-card',
	props: ['content'],
	template: `<div>
		<h3>{{ content.title.text }}</h3>
		<p v-if="content.par.seen">
			{{ content.par.text }}
		</p>
		<button
			v-on:click="toggle"
		>Toggle</button>
	</div>`,
	methods: {
		toggle () {
			console.log('click', this)
			this.content.par.seen = !this.content.par.seen
		}
	}
})
