import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

import router from './router'

new Vue({
    router,
    el: '#app',
    render: h => h(App),
})