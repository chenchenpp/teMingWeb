import Vue from 'vue';
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
import {
    Button,
    Message,
    Container,
    Header,
    Main,
    Footer,
    Dropdown,
    dropdownMenu,
    DropdownItem,
    carousel,
    carouselItem,
    pagination,
    breadcrumb,
    breadcrumbItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Carousel,
    CarouselItem,
    Dialog,
    Image,
    Popover,
    Upload
} from 'element-ui';

Vue.use(Button).use(Container).use(Header).use(Main).use(Footer).use(Dropdown).use(dropdownMenu).use(DropdownItem).use(carousel).use(carouselItem).use(pagination).use(breadcrumb).use(breadcrumbItem).use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Carousel).use(CarouselItem).use(Dialog).use(Image).use(Popover).use(Upload);
Vue.component(Message.name, Message);

(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {
		// Need to polyfill - fall through
  }

    // Polyfills DOM4 MouseEvent
	var MouseEventPolyfill = function (eventType, params) {
		params = params || { bubbles: false, cancelable: false };
		var mouseEvent = document.createEvent('MouseEvent');
		mouseEvent.initMouseEvent(eventType,
			params.bubbles,
			params.cancelable,
			window,
			0,
			params.screenX || 0,
			params.screenY || 0,
			params.clientX || 0,
			params.clientY || 0,
			params.ctrlKey || false,
			params.altKey || false,
			params.shiftKey || false,
			params.metaKey || false,
			params.button || 0,
			params.relatedTarget || null
		);

		return mouseEvent;
	}

	MouseEventPolyfill.prototype = Event.prototype;

	window.MouseEvent = MouseEventPolyfill;
})(window);
