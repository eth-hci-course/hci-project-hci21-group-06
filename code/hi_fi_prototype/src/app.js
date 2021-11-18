import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

import router from './router'
import store from './store'

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App),
})