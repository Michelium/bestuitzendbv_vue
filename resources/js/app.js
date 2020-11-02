import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from "../assets/js/components/App";
import Home from "../assets/js/pages/Home"

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

require('bootstrap');

import $ from 'jquery';
window.$ = window.jQuery = $;
