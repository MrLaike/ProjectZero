import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Catalog from '../views/Catalog.vue';
import Basket from '../views/Basket.vue';
import Favorites from '../views/Favorites.vue';
// import component from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => Catalog,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => Favorites,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () => Basket,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
