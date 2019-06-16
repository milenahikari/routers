import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Pages/Home'
import Content from './components/Pages/Content'

Vue.use(VueRouter);

const routers = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    }
  ]
})

export default routers