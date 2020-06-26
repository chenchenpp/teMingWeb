export default {
    path: '/brandEntry',
    name: 'brandEntry',
    component: () =>
        import ( /* webpackChunkName: 'product' */ '../views/BrandEntry.vue')
};