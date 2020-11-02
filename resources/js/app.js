import Vue from 'vue'
import App from "../assets/js/components/App";
import router from "./router";

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});

require('bootstrap');

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


import $ from 'jquery';
window.$ = window.jQuery = $;
