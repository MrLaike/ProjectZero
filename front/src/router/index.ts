import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/home/Home.vue';
import Catalog from '@/views/catalog/Catalog.vue';
import Detail from '@/views/catalog/Detail.vue';
import Cart from '@/views/cart/Cart.vue';
import Order from '@/views/order/Order.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
    component: Catalog,
  },
  {
    path: '/catalog/:link',
    name: 'Detail',
    component: Detail,
    props: () => ({ link: ':link' }),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
