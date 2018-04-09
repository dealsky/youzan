import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Bill from 'components/bill/bill'
import User from 'components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/bill',
      component: Bill
    },
    {
      path: 'user',
      component: User
    }
  ]
})
