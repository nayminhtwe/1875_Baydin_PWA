import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Normal = () => import(/* webpackChunkName: "about" */ '../views/Normal.vue')
const Content = () => import(/* webpackChunkName: "about" */ '../views/Content.vue')
const Special = () => import(/* webpackChunkName: "about" */ '../views/Special.vue')
const Direct = () => import(/* webpackChunkName: "about" */ '../views/Direct.vue')
const Phone = () => import(/* webpackChunkName: "about" */ '../views/Phone.vue')
const Order = () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
const Category = () => import(/* webpackChunkName: "about" */ '../views/Category.vue')
const Free = () => import(/* webpackChunkName: "about" */ '../views/Free.vue')
const Orders = () => import(/* webpackChunkName: "about" */ '../views/Orders.vue')
const Star = () => import(/* webpackChunkName: "about" */ '../views/Star.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/normal/:categoryId',
    name: 'normal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Normal
  },
  {
    path: '/special/:categoryId',
    name: 'special',
    component: Special
  },
  {
    path: '/direct/:categoryName?',
    name: 'direct',
    component: Direct
  },
  {
    path: '/phone',
    name: 'phone',
    component: Phone
  },
  {
    path: '/content/:categoryId',
    name: 'content',
    component: Content
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/category/:categoryName',
    name: 'category',
    component: Category
  },
  {
    path: '/free',
    name: 'free',
    component: Free
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/star/:categoryName',
    name: 'star',
    component: Star
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
