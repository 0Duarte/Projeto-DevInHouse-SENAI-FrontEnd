import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp/SignUp.vue'


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
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
    
  ]
})

export default router
