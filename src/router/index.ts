import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/login',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: '/events',
        name: 'events',
        component: () => import('@/views/Events.vue'),
      },
      {
        path: '/add-event',
        name: 'addEvent',
        component: () => import('@/views/EventCreate.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router





