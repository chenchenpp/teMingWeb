export default {
    path: '/brandEntry',
    name: 'brandEntry',
    component: () =>
        import ( /* webpackChunkName: 'product' */ '../views/BrandEntry.vue')
};

// export default {
//     path: '/recruit/:type',
//     name: 'recruit',
//     component: () =>
//         import ( /* webpackChunkName: 'recruit' */ '../views/joinUs/main.vue'),

//     children: [{
//             path: 'brandEntry',
//             name: 'brandEntry',
//             component: () =>
//                 import ( /* webpackChunkName: 'brandEntry' */ '../views/BrandEntry.vue')
//         },
//         {
//             path: 'joinUs',
//             name: 'joinUs',
//             component: () =>
//                 import ( /* webpackChunkName: 'joinUs' */ '../views/JoinUs.vue')
//         }
//     ]

// };