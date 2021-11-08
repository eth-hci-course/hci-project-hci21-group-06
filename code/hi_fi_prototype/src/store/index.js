import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import themes from './modules/Themes/themes'
import ABTests from './modules/ABTests/ABTests'

export default new Vuex.Store({
  modules: {
    themes,
    ABTests,
  },
})