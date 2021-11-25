
const state = () => ({
    ABToggle: true,
    clicksDashboard: 0,
    clicksRanking: 0,
    clicksShop: 0,
    clicksAnalytics: 0,
    clicksSettings: 0,
    timeDashboard: 0,
    timeRanking: 0,
    timeShop: 0,
    timeAnalytics: 0,
    timeSettings: 0,
})
const mutations = {
    incrementDashboard (state) {
        state.clicksDashboard += 1
    },
    incrementRanking (state) {
        state.clicksRanking += 1
    },
    incrementShop (state) {
        state.clicksShop += 1
    },
    incrementAnalytics (state) {
        state.clicksAnalytics += 1
    },
    incrementSettings (state) {
        state.clicksSettings += 1
    },
    setAB (state, newVal) {
        state.ABToggle = newVal
    },
    incrementTimeDashboard (state, adder) {
        state.timeDashboard += adder
    },
    incrementTimeRanking (state, adder) {
        state.timeRanking += adder
    },
    incrementTimeShop (state, adder) {
        state.timeShop += adder
    },
    incrementTimeAnalytics (state, adder) {
        state.timeAnalytics += adder
    },
    incrementTimeSettings (state, adder) {
        state.timeSettings += adder
    },
}
export default {
    state,
    mutations
  }