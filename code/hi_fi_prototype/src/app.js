import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './App.vue'
import VueRouter from 'vue-router'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Rankings from './pages/Rankings'
import Shop from './pages/Shop'
import Analytics from './pages/Analytics'


const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/rankings', component: Rankings },
    { path: '/shop', component: Shop },
    { path: '/analytics', component: Analytics },
    { path: '/settings', component: Settings },
  ]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    el: '#app',
    render: h => h(App),
})