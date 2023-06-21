import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from "@/views/Index.vue";
import BoxSimulator from "@/views/BoxSimulator";
import Test from "@/views/Test";
import admin from "@/views/Admin/admin";

const routes = [
  {
    path: '/',
    component: Test
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
  path: '/home',
    component: HomeView
  },{
  path: '/bs',
    component: BoxSimulator
  },{
  path: '/test',
    component: Test
  },{
  path: '/admin',
    component: admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
