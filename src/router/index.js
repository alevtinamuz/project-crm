import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {layout: 'main'},
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'special'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    meta: {layout: 'empty'},
    component: () => import('../views/UploadBooks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
