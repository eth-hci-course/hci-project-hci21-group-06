import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Rankings from '../pages/Rankings'
import Shop from '../pages/Shop'
import Analytics from '../pages/Analytics'

const routes = [
    { path: '/', redirect: '/dashboard'},
    { path: '/dashboard', component: Dashboard },
    { path: '/rankings', component: Rankings },
    { path: '/shop', component: Shop },
    { path: '/analytics', component: Analytics },
    { path: '/settings', component: Settings },
  ]

export default new VueRouter({
    routes
})
