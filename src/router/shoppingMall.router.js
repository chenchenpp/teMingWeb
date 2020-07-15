export default {
    path: '/shoppingMall',
    name: 'shoppingMall',
    component: () =>
        import ( /* webpackChunkName: 'product' */ '../views/shoppingMall.vue')
};
