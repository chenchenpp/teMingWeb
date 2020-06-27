import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import './plugins/element.js';
import './assets/iconfont/iconfont.js';
import {
    get,
    post
} from './util/request/http';
import './components/global';
import {
    i18n
} from './assets/lang/i18n'
require('./assets/sass/reset.scss');
import {
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Carousel,
    CarouselItem,
    Dialog
} from 'element-ui';
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Dialog);
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 2560) {
            docEl.style.fontSize = '200px';
        } else if (clientWidth <= 600) {
            docEl.style.fontSize = '32px';
        } else {
            docEl.style.fontSize = 192 * (clientWidth / 1920) + 'px';
        }
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');