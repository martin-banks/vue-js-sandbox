<template>
	<div class="quiz">
		<div class="quiz__header">
			<h2>{{ content.title }}</h2>
			<h4>Your score: {{ score }} / {{ content.questions.length }}</h4>
		</div>

		<quiz-item v-for="(q, i) in content.questions"
			:key="i"
			:question="q.question"
			:answer="q.answer"
			:options="q.options"
			:index="i"
			@answer="correctAnswer"
		>
			<img slot="top" v-if="q.image" :src="q.image" alt="">
		</quiz-item>
	</div>	
</template>


<style lang="sass" scoped>
@import '../styleguide/index.sass'

.quiz
	+reset
	+robotoCond-reg
	max-width: 500px
	margin: 32px auto
	padding: 36px
	+corner-round-2
	border: solid 1px $color-grey-3
	&__header
		margin-bottom: 50px

h4 
	margin-top: 24px
	span


</style>

<script>
import QuizItem from '@/components/QuizItem'
import content from '@/content/quiz'

export default {
	name: 'QuizMulti',
	components: {
		'quiz-item': QuizItem,
	},
	data() {
		return {
			content,
			score: 0,
		}
	},
	methods: {
		correctAnswer(answer) {
			this.score++
			console.log({ answer, score: this.score })
		}
	}
	
}

</script>

