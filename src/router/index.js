import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Issue from '../views/Issue.vue'
import Launch from "../views/Launch";
import Query from "../views/Query";
import QueryById from "../views/QueryById";
import ReviewEdit from "../views/ReviewEdit";
import ReviewDetail from "../views/ReviewDetail";
import Reviews from "../views/Reviews";
import NavigationBar from "../components/common/NavigationBar";

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home'
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
    path: '/issue',
    component: Issue
  },

  {
    path: '/navigationBar',
    component: NavigationBar
  },


  {
    path: '/launch',
    component: Launch
  },

  {
    path: '/reviewEdit',
    component: ReviewEdit
  },

  {
    path: '/reviewDetail',
    component: ReviewDetail
  },

  {
    path: '/reviews',
    component: Reviews
  },

  {
    path: '/query',
    component: Query
  },

  {
    path: '/queryById',
    component: QueryById
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
