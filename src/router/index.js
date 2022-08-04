import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeComponent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutComponent.vue')
    },
  ]
})

export default router
