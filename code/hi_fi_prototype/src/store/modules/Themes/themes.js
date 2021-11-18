
const state = () => ({
    currentTheme: {
        name: "Default Light",
        id: "DefaultLight",
        primary: '#83b9ff',
        accent: '#ff6090',
        cost: 0,
        primaryCategory: "blue",
        accentCategory: "red",
        theme: "light"
    },
    purchasedThemes: [
        {
            name: "Default Light",
            id: "DefaultLight",
            primary: '#83b9ff',
            accent: '#ff6090',
            cost: 0,
            primaryCategory: "blue",
            accentCategory: "red",
            theme: "light"
        },
        {
            name: "Default Dark",
            id: "DefaultDark",
            primary: '#005ecb',
            accent: '#b0003a',
            cost: 0,
            primaryCategory: "blue",
            accentCategory: "red",
            theme:"dark"
        },
    ],
    allThemes: [
        {
            name: "Default Light",
            id: "DefaultLight",
            primary: '#83b9ff',
            accent: '#ff6090',
            cost: 0,
            primaryCategory: "blue",
            accentCategory: "red",
            theme: "light"
        },
        {
            name: "Default Dark",
            id: "DefaultDark",
            primary: '#005ecb',
            accent: '#b0003a',
            cost: 0,
            primaryCategory: "blue",
            accentCategory: "red",
            theme:"dark"
        },
        {
            name: "Purple Light",
            id: "PurpleLight",
            primary: '#d500f9',
            accent: '#40c4ff',
            cost: 10,
            primaryCategory: "purple",
            accentCategory: "blue",
            theme: "light"
        },
        {
            name: "Purple Dark",
            id: "PurpleDark",
            primary: '#d500f9',
            accent: '#40c4ff',
            cost: 10,
            primaryCategory: "purple",
            accentCategory: "blue",
            theme: "dark"
        },
        {
            name: "Blue Yellow Light",
            id: "BlueYellowLight",
            primary: '#81d4fa',
            accent: '#fdd835',
            cost: 20,
            primaryCategory: "lightblue",
            accentCategory: "yellow",
            theme: "light"
        },
        {
            name: "Blue Yellow Dark",
            id: "BlueYellowDark",
            primary: '#81d4fa',
            accent: '#fdd835',
            cost: 20,
            primaryCategory: "lightblue",
            accentCategory: "yellow",
            theme: "dark"
        },
        {
            name: "Green Brown Light",
            id: "GreenBrownLight",
            primary: '#1b5e20',
            accent: '#795548',
            cost: 100,
            primaryCategory: "green",
            accentCategory: "brown",
            theme: "light"
        },
        {
            name: "Green Brown Dark",
            id: "GreenBrownDark",
            primary: '#1b5e20',
            accent: '#795548',
            cost: 100,
            primaryCategory: "green",
            accentCategory: "brown",
            theme: "dark"
        },
        {
            name: "Black Red Light",
            id: "BlackRedLight",
            primary: '#bf360c',
            accent: '#455a64',
            cost: 50,
            primaryCategory: "deeporange",
            accentCategory: "bluegrey",
            theme: "light"
        },
        {
            name: "Black Red Dark",
            id: "BlackRedDark",
            primary: '#bf360c',
            accent: '#455a64',
            cost: 50,
            primaryCategory: "deeporange",
            accentCategory: "bluegrey",
            theme: "dark"
        },
        {
            name: "Green Yellow Light",
            id: "GreenYellowLight",
            primary: '#1de9b6',
            accent: '#ffea00',
            cost: 20,
            primaryCategory: "green",
            accentCategory: "yellow",
            theme: "light"
        },
        {
            name: "Green Yellow Dark",
            id: "GreenYellowDark",
            primary: '#1de9b6',
            accent: '#ffea00',
            cost: 20,
            primaryCategory: "green",
            accentCategory: "yellow",
            theme: "dark"
        },
    ],
})

const getters = {
    purchaseableThemes: state =>{
        return state.allThemes.filter(function (item) {
            let bool = true;
            state.purchasedThemes.forEach(function (theme) {
                if (item.id == theme.id) bool = false
            })
            return bool
        })
    }
}

const actions = {
    purchaseTheme ({commit}, theme){
        commit("addToPurchased", theme)
    }
}

const mutations = {
    setTheme (state, theme){
        state.currentTheme = theme
    },
    addToPurchased (state, theme) {
        state.purchasedThemes.push(theme)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }