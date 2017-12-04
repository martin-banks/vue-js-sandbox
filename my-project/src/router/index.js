import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Toggle1 from '@/components/Toggle1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/toggle1',
    	name: 'Toggle1',
    	component: Toggle1
    }
  ]
})
