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