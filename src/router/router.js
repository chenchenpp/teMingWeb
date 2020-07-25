import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
let routerList = [];
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
function importAll(routerArr) {
  routerArr.keys().forEach(item => {
    routerList.push(routerArr(item).default);
  });
};
importAll(require.context('.', true, /\.router\.js/));
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue')
    },
    ...routerList
  ]
});
