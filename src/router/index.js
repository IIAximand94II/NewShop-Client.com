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
      name: 'user.personal',
    },
    {
      path: '/login',
      component: () => import('../views/login/IndexComponent.vue'),
      name: 'user.login',
    },
    {
      path: '/signin',
      component: () => import('../views/signin/IndexComponent.vue'),
      name: 'user.signin',
    },
    {
      path: '/forgot',
      component: () => import('../views/forgotpass/IndexComponent.vue'),
      name: 'user.forgot',
    },
    {
      path: '/reset',
      component: () => import('../views/resetpass/IndexComponent.vue'),
      name: 'user.reset',
    },
    {
      path: '/blog',
      component: () => import('../views/blog/IndexView.vue'),
      name: 'blog.index',
    },
    {
      path: '/blog/:id',
      component: () => import('../views/blog/PostView.vue'),
      name: 'blog.post',
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/404/IndexComponent.vue'),
      name: 'main.404',
    },
  ]
})

router.beforeEach((to, from, next) => {

  const Token = localStorage.getItem('access-token');
  console.log(from.name);

  if(!(to.name === 'user.login' || to.name === 'user.signin')){
    //console.log('no login')
    if(to.name === 'user.personal' && !Token){
      return next({ name:'user.login' })
    }


    if(to.name === 'checkout.index' && !Token){
      return next({ name:'user.login' })
    }
  }


  if((to.name === 'user.login' || to.name === 'user.signin') && Token){

    return next({ name:'user.personal' })
  }

  // if((to.name === 'user.login' && from.name === 'cart.index') && Token){
  //   return next({ name:'checkout.index'})
  // }


  next()
});


export default router;
