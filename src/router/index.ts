// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('@/views/Home.vue'),
      },
      {
        name: 'Contact',
        path: '/contact',
        component: () => import('@/views/Contact.vue'),
      },
      {
        name: 'Product',
        path: '/product',
        component: () => import('@/views/Product/index.vue'),
      },
      {
        name: 'ProductItem',
        path: '/product/:id',
        component: () => import('@/views/Product/[id].vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
