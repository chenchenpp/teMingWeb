import Vue from 'vue';
import { Button, Message, Container, Header, Main, Footer, Dropdown, dropdownMenu, DropdownItem } from 'element-ui';

Vue.use(Button).use(Container).use(Header).use(Main).use(Footer).use(Dropdown).use(dropdownMenu).use(DropdownItem);
Vue.component(Message.name, Message);
