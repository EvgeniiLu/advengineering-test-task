import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
          component: () => import('@/views/AddEvent.vue'),
        },
      ],
    },
  ]
})

export default router
