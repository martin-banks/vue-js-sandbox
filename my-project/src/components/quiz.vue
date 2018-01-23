<template>
	<div>
		<section>
			<h1>{{ title }}</h1>
			<h2>{{ score }} / {{ quizLength }} </h2>
			<p> {{ Math.round(score / quizLength  * 100) }}% </p>
		</section>
		
		<section>
			<question 
				v-for = "(question, index) in questions"
				v-bind:item="question"
				v-bind:score="score"
				v-bind:id="index"
				:class="['question__card']"
				@answer="answerBack"
			/>
		</section>
		<section>
			<button v-on:click="printScore">Check score</button>
		</section>
	</div>
</template>


<script>
	import content from '../content/quiz'
	content.quizLength = content.questions.length
	content.questions.map(question => {
		const { answer, options } = question
		const answerIndex = Math.round(Math.random() * (options.length))

		const update = question
		update.options.push(answer)

		const randomised = []
		const loops = update.options.length
		for (let i = 0; i < loops; i++) {
			const randomInd = Math.floor(Math.random() * (update.options.length))
			randomised.push(update.options[randomInd])
			update.options.splice(randomInd, 1)
		}
		// const randomised = [... new Array(update.option.length)]
		// 	.reduce((prev, cur, i, arr) => {
		// 		let output = prev
		// 		const random = Math.floor(Math.random() * arr.length)
		// 		const newItem = update.options[random]
		// 		output.push(newItem)
		// 		return output
		// 	}, [] )

		update.options = randomised
		return update

	})

	export default {
		data () {
			return content
		},
		methods: {
			printScore() {
				window.alert(`Total: ${this.score}`)
			},
			answerBack (x) {
				this.score++
				console.log('something came back', x)
			}
		},
	}
</script>


<style modules lang="sass" scoped>
	h1, h2
		margin-top: 0
		color: red
	.question
		&__card
			border: solid 1px #e2e2e2
			border-radius: 8px
			padding: 24px
			margin-bottom: 24px
		*
			margin-top: 0
			color: lime !important

</style>