import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'main'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'main'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta: {layout: 'main'},
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {layout: 'main'},
    component: () => import('../views/Details.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main'},
    component: () => import('../views/History.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main'},
    component: () => import('../views/Planning.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main'},
    component: () => import('../views/Record.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    meta: {layout: 'main'},
    component: () => import('../views/UploadBooks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
