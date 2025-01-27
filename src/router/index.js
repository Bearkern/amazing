import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
