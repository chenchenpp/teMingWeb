import Vue from 'vue';
import { Button, Message, Container, Header, Main, Footer, Dropdown,
  dropdownMenu, DropdownItem, carousel, carouselItem, pagination, breadcrumb, breadcrumbItem } from 'element-ui';

Vue.use(Button).use(Container).use(Header).use(Main).use(Footer)
  .use(Dropdown).use(dropdownMenu).use(DropdownItem).use(carousel).use(carouselItem).use(pagination)
  .use(breadcrumb).use(breadcrumbItem);
Vue.component(Message.name, Message);
