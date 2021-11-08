import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings'
import Rankings from '../pages/Rankings'
import Shop from '../pages/Shop'
import Analytics from '../pages/Analytics'

import PurePurchases from '../pages/Shop/components/PurePurchases'
import PureShop from '../pages/Shop/components/PureShop'

const routes = [
    { path: '/', redirect: '/dashboard'},
    { path: '/dashboard', component: Dashboard },
    { path: '/rankings', component: Rankings },
    { path: '/shopA', component: Shop, children: [
        {path: 'store', component: PureShop},
        {path: 'purchases', component: PurePurchases},
        {path: '', redirect: 'store'}
    ] },
    { path: '/shopB', component: Shop},
    { path: '/analytics', component: Analytics },
    { path: '/settings', component: Settings },
  ]

export default new VueRouter({
    routes
})
