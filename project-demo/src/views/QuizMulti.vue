<template>
	<div class="quiz">
		<quiz-multi />
	</div>	
</template>


<style lang="sass" scoped>
@import '../styleguide/index.sass'

</style>

<script>
import QuizMulti from '@/components/QuizMulti'


export default {
	name: 'QuizMulti',
	components: {
		'quiz-multi': QuizMulti,
	},
	data() {
		return {}
	},

}

</script>

