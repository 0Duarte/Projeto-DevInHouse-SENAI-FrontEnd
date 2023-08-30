import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
    
  ]
})

export default router
