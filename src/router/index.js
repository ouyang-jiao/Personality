import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('@/views/Test.vue')
    },
    {
    path: '/result',
    name: 'Result',
    component: () => import('@/views/Result.vue')
  },
  {
    path: '/egg',
    name: 'Egg',
    component: () => import('@/views/Egg.vue')
  }
]
})

export default router
