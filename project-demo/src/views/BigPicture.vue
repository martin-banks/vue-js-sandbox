<template>
  <div id="app">
		<image-overlay v-for="(img, i) in content.images"
			:key="i"
			:title="img.title"
			:caption="img.caption"
			:src="img.src"
			:text="img.text"
		/>
	</div>
</template>


<style scoped lang="sass">
@import ../styleguide/index.sass
#app
	max-width: 800px
	margin: 32px auto
</style>


<script>
import content from '@/content/bigPicture'
import ImageOverlay from '@/components/ImageOverlay'

export default {
	name: 'BigPicture',
	components: {
		'image-overlay': ImageOverlay,
	},
  data () {
    return {
			content
    }
  }
}
</script>