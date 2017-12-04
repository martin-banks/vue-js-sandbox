<template>
	<div>
		<test-card />
		<div class="card">
			<h2 v-if="title.seen">{{ title.text }}</h2>
			<p v-if="par.seen">{{ par.text }}</p>
			<button v-on:click="togglePar">Change content</button>
		</div>
		<card
			v-bind:title="title"
			v-bind:par="par"
		/>
	</div>
</template>

<script>
	import content from '../content/index'
	import Vue from 'vue'

	Vue.component('card', {
		props: ['title', 'par', 'click'],
		template: `<div class="card">
			<h2 v-if="title.seen">{{ title.text }}</h2>
			<p v-if="par.seen">{{ par.text }}</p>
			<button v-on:click="togglePar">Change content</button>
		</div>`,
		methods: {
			togglePar () {
				this.par.seen = !this.par.seen
			}
		}
	})
	export default {
		name: 'Toggle-test',
		data () {
			return content.card
		},
		methods: {
			togglePar () {
				this.par.seen = !this.par.seen
			}
		}
	}
</script>

<style scoped>
	.card {
		position: relative;
		display: block;
		width: 100%;
		max-width: 600px;
		border-radius: 16px;
		border: solid 1px #e2e2e2;
		padding: 24px;
		padding-bottom: 48px;
		margin: 0 auto;
	}
	h2 {
		margin: 0;
		margin-bottom: 24px;
	}
	button {
		display: block;
		width: calc(100% - 8px);
		position: absolute;
		bottom: 0;
		left: 0;
		padding: 8px 24px;
		background: #333;
		color: gold;
		border-radius: 12px;
		margin: 4px;
		box-sizing: border-box;
	}

</style>