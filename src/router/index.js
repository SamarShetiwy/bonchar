import { createRouter, createWebHistory } from 'vue-router'
import product from '../views/product.vue'
import card from '../views/card.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/',
      name: 'card',
      component: card
    }
   
    
  ]
})

export default router
