
export default {
  path: '/product',
  name: 'product',
  component: () => import(/* webpackChunkName: 'product' */ '../views/product.vue')
};
