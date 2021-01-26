import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@v/home'
import About from '@v/about'
import Contact from '@v/contact'
import Solution from '@v/solution'
import Recruiting from '@v/recruiting'
import Detail from '@v/detail'

// animate
import animate from '@u/animate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/solution',
    name: 'solution',
    component: Solution,
  },
  {
    path: '/recruiting',
    name: 'recruiting',
    component: Recruiting,
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      parent: '/recruiting'
    },
    component: Detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.documentElement.scrollTop = 0
  animate._removeScrollEvent()
  next()
})

router.afterEach((to, from) => {
  setTimeout(() => {
    animate.init()
  })
})

export default router
