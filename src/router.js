import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Payment from './views/Payment.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
