export default {
    path: '/brandStory',
    name: 'brandStory',
    component: () =>
        import ( /* webpackChunkName: 'product' */ '../views/BrandStory.vue')
};