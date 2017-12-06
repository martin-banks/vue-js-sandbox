// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import comp from './components/card'
import question from './components/question'
import quizButton from './components/button'


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    msg: 'Hi',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum reiciendis architecto expedita esse in voluptatibus assumenda quas explicabo, eius facere doloribus perspiciatis autem repellat laudantium debitis odit quidem vitae dicta.'
  },
  router,
  template: '<App/>',
  components: { App }
})
