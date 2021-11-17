import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import themes from './modules/Themes/themes'
import ABTests from './modules/ABTests/ABTests'
import currency from './modules/Currency/currency'

export default new Vuex.Store({
  modules: {
    themes,
    ABTests,
    currency
  },
}) 