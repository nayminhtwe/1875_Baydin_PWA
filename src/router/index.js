import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const Normal = () => import(/* webpackChunkName: "about" */ '../views/Normal.vue')
const Content = () => import(/* webpackChunkName: "about" */ '../views/Content.vue')

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
    path: '/content/:categoryId',
    name: 'content',
    component: Content
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
