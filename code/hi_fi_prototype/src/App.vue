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
          <md-bottom-bar-item id="bottom-bar-item-shop" md-label="Shop" md-icon="local_mall" to='/shop'></md-bottom-bar-item>
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
  watch: {
    '$route' (to, from) {
      this.transitionName = (getPageNumber(to.path) < getPageNumber(from.path)) ? 'slide-right' : 'slide-left'
    },
  },
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