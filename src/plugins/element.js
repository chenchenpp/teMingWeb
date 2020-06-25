import Vue from 'vue';
import { Button, Message, Container, Header, Main, Footer, Dropdown,
  dropdownMenu, DropdownItem, carousel, carouselItem } from 'element-ui';

Vue.use(Button).use(Container).use(Header).use(Main).use(Footer)
  .use(Dropdown).use(dropdownMenu).use(DropdownItem).use(carousel).use(carouselItem);
Vue.component(Message.name, Message);
