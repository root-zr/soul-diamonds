import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Header from '../components/Header.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/home',
    name: 'Home',
    // 懒加载
    component: () => import('../views/Home.vue')
    // component: () => import('../components/Header.vue')
  },

  {
    path: '/login',
    component: Login
  },

  {
    path: '/header',
    component: Header
  },

  {
    path: '/register',
    component: Register
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
