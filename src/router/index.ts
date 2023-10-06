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
          path: '/orders',
          name: 'orders',
          component: () => import('@/views/Orders.vue'),
        },
        {
          path: '/add-order',
          name: 'addOrder',
          component: () => import('@/views/OrderAdd.vue'),
        },
      ],
    },
  ]
})

export default router
