import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoCard from '@/views/DemoCard'
import QuizMulti from '@/views/QuizMulti'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/democard',
      name: 'DemoCard',
      component: DemoCard,
    },
    {
      path: '/quiz',
      name: 'QuizMulti',
      component: QuizMulti,
    },
  ]
})
