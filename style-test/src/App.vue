<template>
  <div id="app">
    <animator />
    </div>
</template>

<script>
import Animator from './components/Animator'

export default {
  name: 'App',
  data() {
    return {
      show: true,
    }

  },
  components: {
    Animator
  }
}
</script>

<style lang="sass" scoped>
#app
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	margin-top: 60px
  max-width: 400px
</style>
