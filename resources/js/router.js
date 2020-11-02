import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../assets/js/pages/Home';
import About from '../assets/js/pages/About';
import Contact from '../assets/js/pages/contact/index';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/overons',
        name: 'about',
        component: About,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
