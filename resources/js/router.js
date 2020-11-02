import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../assets/js/pages/Home';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
