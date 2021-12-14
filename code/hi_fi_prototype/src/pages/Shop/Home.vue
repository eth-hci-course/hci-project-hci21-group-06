<template>
<div class="shop">
  <div class="A" v-if="ABToggle==false">
    <md-tabs md-alignment="fixed" md-active-tab="tab-Store" md-sync-route>
        <md-tab id="tab-Store" md-label="Store" to="/shopA/store"/>
        <md-tab id="tab-Purchases" md-label="Purchases" to="/shopA/purchases"/>
    </md-tabs>
    <transition :name="transitionName">
      <router-view class="shop-router"> </router-view>
    </transition>
  </div>
  <MixedShop class="B" v-if="ABToggle==true"/>
</div>
</template>

<script>
import PurePurchases from './components/PurePurchases'
import PureShop from './components/PureShop'
import MixedShop from './components/MixedShop'
import { mapState } from 'vuex'

export default {
  data: function () {
    return {
      startTime: 0,
      transitionName: 'slide-right'
    }
  }, 
  components: {
    PurePurchases,
    PureShop,
    MixedShop
  },
  methods: {
    clickHandler() {
      console.log("recorded click in shop");
      this.$store.commit("incrementShop");
    },
  },
  created() {
    window.addEventListener('click', this.clickHandler);
    const current = new Date();
    this.startTime = current.getTime();
  },
  beforeDestroy() {
    window.removeEventListener('click', this.clickHandler);
    const current2 = new Date();
    this.$store.commit("incrementTimeShop", current2.getTime()-this.startTime);
  },
  computed: mapState({
        ABToggle: state => false,
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
.A, .B {
  display:flex;
  flex-direction: column;
  overflow-y:auto;
  overflow-x:hidden;
}
</style>