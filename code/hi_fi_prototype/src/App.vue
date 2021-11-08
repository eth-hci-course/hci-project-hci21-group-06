<template>
<div class="page">
      <md-content>
        <router-view class="routerView"/>
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

export default {
  name: 'App',
  components: {
    
  },
  computed: mapState({
        shopRoute: state => (state.ABTests.ABToggle) ? '/shop' : '/shop/store'
    }),
}
</script>

<style lang="css" scoped>
  .page{
    display:flex;
    flex-flow: column;
    height: 100vh;
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
    primary: #005ecb, // The primary color of your application
    accent: #b0003a, // The accent or secondary color
    theme: dark,
  ));

  @include md-register-theme("DefaultLight", (
    primary: #83b9ff, // The primary color of your application
    accent: #ff6090, // The accent or secondary color
    theme: light,
  ));

  @import "~vue-material/dist/theme/all"; 
</style>