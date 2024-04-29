import { createRouter, createWebHistory } from 'vue-router'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../views/Cart.vue'
import HomeView from '../views/HomeView.vue'
import ProductsList from '../views/ProductsList.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/product/:productId',
      name: 'SingleProduct',
      component: SingleProduct
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/products-list',
      name: 'ProductsList',
      component: ProductsList
    },
   
  ]
})

export default router

// slug