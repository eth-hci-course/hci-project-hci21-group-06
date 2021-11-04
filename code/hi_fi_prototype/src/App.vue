<template>
<div class="page">
      <div class="content">
        <router-view/>
      </div>
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
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="css" scoped>
  .page{
    display:flex;
    flex-flow: column;
    height: 100vh;
  }
  .content{
    background:gold;
    height: 756px;
  }
  .bottom-navigator{
    bottom: 0;
    position: absolute;
    width: 100%;
  }
</style>