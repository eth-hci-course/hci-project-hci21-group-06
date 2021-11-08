<template>
<div class="shop">
  <md-card class="card">
      <md-card-content>
        <p> Current: </p>
        <p> Lifetime: </p>
      </md-card-content>
  </md-card>

  <div class="A" v-if="ABToggle==false">
    <md-tabs md-alignment="fixed" md-active-tab="tab-Store" md-sync-route>
        <md-tab id="tab-Store" md-label="Store" to="/shopA/store"/>
        <md-tab id="tab-Purchases" md-label="Purchases" to="/shopA/purchases"/>
    </md-tabs>
    <transition :name="transitionName">
      <router-view class="shop-router"> </router-view>
    </transition>
  </div>
  <MixedShop v-if="ABToggle==true"/>
</div>
</template>

<script>
import PurePurchases from './components/PurePurchases'
import PureShop from './components/PureShop'
import MixedShop from './components/MixedShop'
import { mapState } from 'vuex'

export default {
  data: function () {
    return {transitionName: 'slide-right'}
  }, 
  components: {
    PurePurchases,
    PureShop,
    MixedShop
  },
  computed: mapState({
        ABToggle: state => state.ABTests.ABToggle
    }),
  watch: {
  '$route' (to, from) {
    this.transitionName = to.path == '/shopA/purchases' ? 'slide-right' : 'slide-left'
  }
}
}
</script>

<style scoped>
@import '../../router/transitions.css';
.card {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 20px;
}
.shop {
  display:flex;
  flex-direction: column;
}
.shop-router {
  display:flex;
  flex-direction: column;
  overflow:auto;
}
.A {
  display:flex;
  flex-direction: column;
  overflow-y:auto;
  overflow-x:hidden;
}
</style>