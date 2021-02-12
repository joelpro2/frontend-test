import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    props: true,
    component: () => import(/* webpackChunkName: "movie" */ '@/views/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
