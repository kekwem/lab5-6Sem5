import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Cats'
  },
  {
    path: '/folder/Cats',
    component: () => import ('../views/Tab1Page.vue')
  },
  {
    path: '/folder/Dogs',
    component: () => import ('../views/Tab2Page.vue')
  },
  {
    path: '/folder/Horses',
    component: () => import ('../views/Tab3Page.vue')
  },
  {
    path: '/folder/Bears',
    component: () => import ('../views/Tab4Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
