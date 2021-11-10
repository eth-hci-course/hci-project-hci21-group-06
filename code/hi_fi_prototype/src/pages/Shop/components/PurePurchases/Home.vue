<template key="purePurchases">
<div class="themeList">
    <div v-for="theme in purchasedThemes">
        <md-card class="themeCard" :md-theme="theme.id">
            <md-card-header>
                <div class="md-title">{{theme.name}} </div>
            </md-card-header>
            <md-card-content>
                <md-avatar class="md-primary"/>
                <md-avatar class="md-accent"/>

            </md-card-content>
            <md-card-actions>
                <md-button class="md-raised md-primary" v-on:click="setTheme(theme)" >Equip</md-button>
            </md-card-actions>
        </md-card>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: mapState({
        purchasedThemes: state => state.themes.purchasedThemes
    }),
    methods: {
        setTheme: function (theme) {
            this.$material.theming.theme=theme.id
            this.$store.commit('setTheme', theme)
        }
    }
}
</script>

<style scoped>
.themeCard{
    margin: 10px;
}
.themeList{
    display:flex;
    flex-direction:column;
    overflow:auto;
}
</style>