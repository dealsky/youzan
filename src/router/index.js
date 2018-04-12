import Vue from 'vue'
import Router from 'vue-router'
import Base from 'components/base/base'
import Bill from 'components/bill/bill'
import User from 'components/user/user'
import Commodity from 'components/commodity/commodity'
import Login from 'components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/base'
    },
    {
      path: '/base',
      component: Base,
      children: [
        {
          path: 'commodity',
          component: Commodity
        }
      ]
    },
    {
      path: '/bill',
      component: Bill
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
