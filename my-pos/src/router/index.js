import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/pages/dashboard'
import Login from '@/pages/login'
import ItemEntry from '@/components/ItemEntry'
import Stocks from '@/components/Stocks'
import Orders from '@/components/Orders'
import Payments from '@/components/Payments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/dashboard/items',
      name: 'Item Entry',
      component: ItemEntry
    },
    {
      path: '/dashboard/stocks',
      name: 'Stockkkk',
      component: Stocks
    },
    {
      path: '/dashboard/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/dashboard/payments',
      name: 'Payments',
      component: Payments
    }
  ]
})
