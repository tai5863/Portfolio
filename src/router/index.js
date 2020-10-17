import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },
  { 
    path: '/works/:tag',
    name:'Work',
    component: () => import('../views/Work.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  props: null,
  base: process.env.BASE_URL,
  routes
})

export default router
