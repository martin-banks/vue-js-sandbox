<template>
  <div>
    <fact-card>
      <span slot="kicker">Custom kicker</span>
      <h1 slot="title">{{ content.msg }}</h1>
      <div slot="body">
        <bullett-list :list="content.facts" />
        <image-grid :images="content.images" />
      </div>
    </fact-card>
  </div>
</template>


<style scoped lang="sass">
@import ../styleguide/index.sass


</style>


<script>
import content from '@/content/index'

import FactCard from '@/components/FactCard'
import ImageGrid from '@/components/ImageGrid'
import BullettList from '@/components/BullettList'

export default {
  name: 'DemoCard',
  components: {
    'fact-card': FactCard,
    'image-grid': ImageGrid,
    'bullett-list': BullettList,
  },
  data() {
    return {
      content
    }
  }
}
</script>
