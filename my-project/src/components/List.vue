<template>
	<div>
		<h1>title</h1>
		<list-item
			v-for="item in items"
			v-bind:text="item.text"
			v-bind:seen="item.seen"
			v-bind:toggle="toggle"
			v-bind:key="item.id"
		/>
	</div>
</template>


<script>
	import listItem from './listItem'
	import content from '../content/index'
	export default {
		data () {
			return {
				items: content.list
			}
		},
		methods: {
			toggle () {
				console.log('click!!', this)
				this.seen = !this.seen
			}
		}
	}
</script>
