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
    children: [
      { path: '/works/:tag', name:'Work', component: () => import('../views/Work.vue')}
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/picture',
    name: 'Picture',
    component: () => import('../views/Picture.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  props: null,
  base: process.env.BASE_URL,
  routes
})

export default router
