export default {
  path: '/dynamic',
  name: 'dynamic',
  component: () => import(/* webpackChunkName: 'dynamic' */ '../views/dynamic/dynamic.vue'),
  children:[{
    path: 'main',
    name: 'dynamicMain',
    component: () => import(/* webpackChunkName: 'dynamicMain' */ '../views/dynamic/main.vue')
  }, {
    path: 'detail/:id',
    name: 'dynamicDetail',
    component: () => import(/* webpackChunkName: 'dynamicDetail' */ '../views/dynamic/detail.vue')
  }]
};
