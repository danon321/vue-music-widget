import Vue from 'vue'
import VueRouter from 'vue-router'
import PlayList from '../views/PlayList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PlayList',
    component: PlayList
  },
  {
    path: '/song',
    // path: '/song/:id',
    name: 'Player',
    // props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Player.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
