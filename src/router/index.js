import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MegaMenu from '../views/MegaMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mega-menu',
      name: 'MegaMenu',
      component: MegaMenu
    },
    
  ]
})

export default router
