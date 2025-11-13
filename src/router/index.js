import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    meta: { title: 'Home' },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    component: () =>
      import(/* webpackChunkName: 'about' */ '@/views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = '和晞科技 ' + to.meta.title || '和晞科技 Admin'
  next()
})

router.afterEach((to, from) => {
  // console.log('afterEach', to, from)
})

export default router
