import { createRouter, createWebHistory } from 'vue-router'
import SingleProduct from '../views/SingleProduct.vue'
import HomeView from '../views/HomeView.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/product',
      name: 'SingleProduct',
      component: SingleProduct
    }
   
  ]
})

export default router

// slug