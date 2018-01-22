
<template>
  <div>
    <fact-card>
      <span slot="kicker">Custom kciker</span>
      <h1 slot="title">{{ msg }}</h1>
      <div slot="body">
        <ul>
          <li v-for="(fact, i) in facts" :key="i">{{ fact }}</li>
        </ul>
      </div>
    </fact-card>
    <image-grid :images="images" />
  </div>
</template>


<style scoped lang="sass">
@import ./styleguide/index.sass

</style>


<script>
import FactCard from '@/components/FactCard'
import ImageGrid from '@/components/ImageGrid'
// const FactCard = require('@/components/FactCard.vue')

export default {
  name: 'App',
  components: {
    'fact-card': FactCard,
    'image-grid': ImageGrid,
  },
  data() {
    return {
      msg: 'Interesting fact as a prop',
      facts: [
        'Another very interesting fact',
        'This fact is a fact'
      ],
      images: [
        {
          src: 'http://via.placeholder.com/350x350',
          alt: '350x150 Image caption',
        },
        {
          src: 'http://via.placeholder.com/350x350',
          alt: '350x150 Image caption',
        },
        {
          src: 'http://via.placeholder.com/350x350',
          alt: '350x150 Image caption',
        },
        {
          src: 'http://via.placeholder.com/350x350',
          alt: '350x150 Image caption',
        },
      ]
    }
  }
}
</script>
