import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/main/HomeComponent.vue'),
      name: 'main.index',
    },
    {
      path: '/about',
      component: () => import('../views/about/AboutComponent.vue'),
      name: 'main.about',
    },
    {
      path: '/faq',
      component: () => import('../views/faq/FaqComponent.vue'),
      name: 'main.faq',
    },
    {
      path: '/shop',
      component: () => import('../views/shop/IndexComponent.vue'),
      name: 'shop.index',
    },
    {
      path: '/cart',
      component: () => import('../views/cart/IndexComponent.vue'),
      name: 'cart.index',
    },
    {
      path: '/checkout',
      component: () => import('../views/checkout/IndexComponent.vue'),
      name: 'checkout.index',
    },
    {
      path: '/product/:id',
      component: () => import('../views/product/IndexComponent.vue'),
      name: 'product.index',
    },
    {
      path: '/personal',
      component: () => import('../views/personal/IndexComponent.vue'),
      name: 'personal.index',
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404/IndexComponent.vue'),
      name: '404.show',

    },
  ]
})

export default router
