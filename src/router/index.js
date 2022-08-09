import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/main/HomeComponent.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/AboutComponent.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/faq/FaqComponent.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/shop/IndexComponent.vue')
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/personal/IndexComponent.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product/IndexComponent.vue')
    },
  ]
})

export default router
