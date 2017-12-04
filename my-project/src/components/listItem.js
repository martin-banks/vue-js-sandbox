import Vue from 'vue'

export default Vue.component('list-item', {
	name:'list-item',
	props: ['text', 'seen', 'toggle'],
	template: `<li v-if="seen" v-on:click="toggle">
		{{ text }}
	</li>`
})
