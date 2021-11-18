
const state = () => ({
    ABToggle: false,
    clicksDashboard: 0,
    clicksRanking: 0,
    clicksShop: 0,
    clicksAnalytics: 0,
    clicksSettings: 0,
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
}
export default {
    state,
    mutations
  }