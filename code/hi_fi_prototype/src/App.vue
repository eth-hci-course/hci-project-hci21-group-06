<template>
<div class="page">
      <md-content>
      <transition :name="transitionName">
        <router-view class="routerView"/>
      </transition>
      </md-content>
      <div class="bottom-navigator">
        <md-bottom-bar md-type="shift" md-sync-route>
          <md-bottom-bar-item id="bottom-bar-item-Dashboard" md-label="Dashboard" md-icon="dashboard" to='/dashboard'></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-Rankings" md-label="Rankings" md-icon="leaderboard" to='/rankings'></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-shop" md-label="Shop" md-icon="local_mall" :to="shopRoute"></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-stats" md-label="Analytics" md-icon="analytics" to='/analytics'></md-bottom-bar-item>
          <md-bottom-bar-item id="bottom-bar-item-settings" md-label="Settings" md-icon="settings" to='/settings'></md-bottom-bar-item>
        </md-bottom-bar>  
      </div>   
</div>
</template>
 
<script>
import { mapState } from 'vuex'
import {getPageNumber} from './utils.js'

export default {
  name: 'App',
  data: function () {
    return {transitionName: 'slide-right'}
  }, 
  computed: mapState({
        shopRoute: state => (state.ABTests.ABToggle) ? '/shopB' : '/shopA',
    }),
  watch: {
    '$route' (to, from) {
      this.transitionName = (getPageNumber(to.path) < getPageNumber(from.path)) ? 'slide-right' : 'slide-left'
    },
  },
  mounted: function() {
    this.$material.theming.theme = this.$store.state.themes.currentTheme.id
  }
}

</script>

<style lang="css" scoped>
  @import './router/transitions.css';
  .page{
    display:flex;
    flex-flow: column;
    height: 100vh;
    overflow-x:hidden;
  }
  .routerView {
    height: 756px;
    overflow:auto;
  }
  .bottom-navigator{
    bottom: 0;
    position: absolute;
    width: 100%;
  }
</style>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("DefaultDark", (
    primary: #005ecb,
    accent: #b0003a, 
    theme: dark,
  ));

  @include md-register-theme("DefaultLight", (
    primary: #83b9ff,
    accent: #ff6090, 
    theme: light,
  ));

  @include md-register-theme("PurpleLight", (
    primary: #d500f9, 
    accent: #40c4ff, 
    theme: light,
  ));

  @include md-register-theme("PurpleDark", (
    primary: #d500f9, 
    accent: #40c4ff, 
    theme: dark,
  ));

  @include md-register-theme("GreenYellowLight", (
    primary: #1de9b6, 
    accent: #ffea00, 
    theme: light,
  ));

  @include md-register-theme("GreenYellowDark", (
    primary: #1de9b6, 
    accent: #ffea00, 
    theme: dark,
  ));

  @import "~vue-material/dist/theme/all"; 
</style>