import Vue from 'vue'
import Router from 'vue-router'
import App from '@/views/Home'

import HelloWorld from '@/components/HelloWorld'
import DemoCard from '@/views/DemoCard'
import QuizMulti from '@/views/QuizMulti'
import BigPicture from '@/views/BigPicture'
import GridExpander from '@/views/GridExpander'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App,
    },
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
    {
      path: '/image',
      name: 'BigPicture',
      component: BigPicture,
    },
    {
      path: '/expander',
      name: 'GridExpander',
      component: GridExpander,
    },
  ]
})
