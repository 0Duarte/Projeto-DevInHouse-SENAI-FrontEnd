import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/Login.vue'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import NewStudent from '../views/NewStudent/NewStudent.vue'

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
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/newstudent',
      name: 'NewStudent',
      component: NewStudent
    }
    
  ]
})

export default router
