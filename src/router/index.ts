import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
  },
  { path: '/', redirect: '/home' },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
