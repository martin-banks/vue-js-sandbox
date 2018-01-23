<template>
	<div class="quiz__item">
		<slot name="top"/>
		
		<div class="quiz__question">
			<h4>{{ index + 1 }}. {{ question }}</h4>
		</div>

		<slot name="middle"/>

		<div class="quiz__answer">
			<span 
				v-if="!disable"
				v-for="(option, i) in allOptions" 
				:key="i"
				class="button"
				@click="checkAnswer(option.text)"
			>
				{{ option.text }}
			</span>
			<div v-if="disable">
				<span
					v-for="(option, i) in allOptions" 
					:class="option.answer ? 'correct' : option.text === chosen ? 'wrong' : 'innactive'"
					:key="i"
				>
					{{ option.text }}
				</span>
			</div>
		</div>

		<slot name="bottom"/>


	</div>	
</template>


<style lang="sass" scoped>
@import '../styleguide/index.sass'

.quiz__item
	border-bottom: solid 1px $color-grey-2
	margin-bottom: 24px
	padding-bottom: 16px
	&:last-of-type
		border: none

h4
	font-size: 18px
	margin-bottom: 16px

span
	+robotoCond-light
	position: relative
	display: inline-block
	padding: 4px 16px
	font-size: 16px
	background: none
	border: solid 1px $color-grey-3
	+corner-round-1
	margin: 2px
	font-size: 16px


.button
	cursor: pointer
.correct
	color: $color-white
	background: $color-green-reg
.wrong
	color: $color-white
	background: $color-red-reg
.innactive
	color: $color-grey-4

</style>


<script>
export default {
	name: 'QuizItem',
	props: [
		'question',
		'answer',
		'options',
		'index',
	],
	data() {
		return {
			allOptions: [],
			disable: false,
			chosen: null,
		}
	},
	created() {
		let allOptions = [...this.options, this.answer]
		const randomised = []
		const loops = allOptions.length
		for (let i = 0; i < loops; i++) {
			const randomInd = Math.floor(Math.random() * (allOptions.length))
			randomised.push({
				text: allOptions[randomInd],
				answer: allOptions[randomInd] === this.answer
			})
			allOptions.splice(randomInd, 1)
		}
		this.allOptions = randomised
	},
	methods: {
		checkAnswer(option) {
			if (this.disable) return
			this.disable = true
			this.chosen = option
			console.log('checking answer ...', option)
			if (option === this.answer) {
				this.$emit('answer', option)
			}
		}
	}
}

</script>

