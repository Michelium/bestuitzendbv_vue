import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../assets/js/pages/Home';
import About from '../assets/js/pages/About';

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
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
