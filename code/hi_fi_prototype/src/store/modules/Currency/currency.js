
const state = () => ({
    currentCurrency: 50,
    lifetimeCurrency: 500,
})

const getters = {

}

const actions = {

}

const mutations = {
    deductCurrency (state, amount) {
        state.currentCurrency -= amount
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }