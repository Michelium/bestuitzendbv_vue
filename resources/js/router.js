import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from '../assets/js/pages/Home';
import About from '../assets/js/pages/About';
import JobOffers from '../assets/js/pages/joboffers/index';
import Contact from '../assets/js/pages/contact/index';
import Privacystatement from '../assets/js/pages/Privacystatement';

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
        path: '/vacatures',
        name: 'joboffers',
        component: JobOffers,
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    },
    {
        path: '/privacyverklaring',
        name: 'privacystatement',
        component: Privacystatement,
    },
];

const router = new VueRouter({
    routes,
    linkExactActiveClass: "active",
    mode: "history",
});

export default router;
