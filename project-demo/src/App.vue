
<template>
  <div id="app">
    <ul>
      <li v-for="(x, i) in 5">Item: {{ i }}</li>
    </ul>
    <router-view />
  </div>
</template>


<style scoped lang="sass">
@import ./styleguide/index.sass


</style>


<script>
// import content from '@/content/index'

// import FactCard from '@/components/FactCard'
// import ImageGrid from '@/components/ImageGrid'
// import BullettList from '@/components/BullettList'
// const FactCard = require('@/components/FactCard.vue')

export default {
  name: 'App',
  // components: {
  //   'fact-card': FactCard,
  //   'image-grid': ImageGrid,
  //   'bullett-list': BullettList,
  // },
  // data() {
  //   return {
  //     // content
  //   }
  // }
}
</script>
