<template>
  <div class="home">
    <md-toolbar :md-elevation="2">
        <span v-if="isBubble" class="md-title">By device electricity use</span>
        <span v-if="!isBubble" class="md-title">Total electricity use</span>
    </md-toolbar>
    <md-card class="card selectTime">
      <md-card-content>
        <div v-if="!standbyDevices || !isBubble">
          <md-button v-if="timeScale == 'hour'" class="md-raised md-accent">Hour</md-button>
          <md-button v-else v-on:click="timeswitch('hour')">Hour</md-button>
          <md-button v-if="timeScale == 'day'" class="md-raised md-accent">Day</md-button>
          <md-button v-else v-on:click="timeswitch('day')">Day</md-button>
          <md-button v-if="timeScale == 'month'" class="md-raised md-accent">Month</md-button>
          <md-button v-else v-on:click="timeswitch('month')">Month</md-button>
        </div>
        <md-button v-if="isBubble && !standbyDevices" class="sdbutton md-raised" v-on:click="standbyswitch()">Switch to standby devices</md-button>
        <md-button v-if="isBubble && standbyDevices" class="sdbutton md-raised" v-on:click="standbyswitch()">Switch to all devices</md-button>
      </md-card-content>
    </md-card>
    <md-card v-if="isBubble && !standbyDevices && ABToggle" class="card">
      <div>
      <md-card-content v-if="timeScale == 'hour'">
        <img src="./BubbleHour.png">
      </md-card-content>
      <md-card-content v-if="timeScale == 'day'">
        <img src="./BubbleDay.png">
      </md-card-content>
      <md-card-content v-if="timeScale == 'month'">
        <img src="./BubbleMonth.png">
      </md-card-content>
      </div>
    </md-card>
    <md-card v-if="isBubble && !standbyDevices && !ABToggle" class="card">
      <div>
      <md-card-content>
        <BarChartHour v-if="timeScale == 'hour'"/>
        <BarChartDay v-if="timeScale == 'day'"/>
        <BarChartMonth v-if="timeScale == 'month'"/>
      </md-card-content>
      </div>
    </md-card>
    <md-card v-if="!isBubble" class="card">
      <md-card-content>
        <LineChartHour v-if="timeScale == 'hour'"/>
        <LineChartDay v-if="timeScale == 'day'"/>
        <LineChartMonth v-if="timeScale == 'month'"/>
      </md-card-content>
    </md-card>
    <md-card v-if="standbyDevices && isBubble && ABToggle" class="card">
        <div>
          <img src="./BubbleStandby.png">
        </div>
    </md-card>
    <md-card v-if="standbyDevices && isBubble && !ABToggle" class="card">
        <div>
          <BarChartSD/>
        </div>
    </md-card>
    <md-button class="md-raised md-accent dbut" v-if="isBubble" v-on:click="gswitch()"> Switch to total electricity use </md-button>
    <md-button class="md-raised md-accent dbut" v-else v-on:click="gswitch()"> Switch to by device electricity use </md-button>
  </div>
</template>

<script>
  import LineChartHour from "./Components/LineChartHour.vue"
  import LineChartDay from "./Components/LineChartDay.vue"
  import LineChartMonth from "./Components/LineChartMonth.vue"
  import BarChartHour from "./Components/BarChartHour.vue"
  import BarChartDay from "./Components/BarChartDay.vue"
  import BarChartMonth from "./Components/BarChartMonth.vue"
  import BarChartSD from "./Components/BarChartSD.vue"
import { mapState } from 'vuex'

  export default {
  name: "Home",
  computed: mapState({
    ABToggle: state => state.ABTests.ABToggle
  }),
  components: {
    LineChartHour,
    LineChartDay,
    LineChartMonth,
    BarChartHour,
    BarChartDay,
    BarChartMonth,
    BarChartSD
  },
  data() {
       return {
          isBubble: false,
          timeScale: "hour",
          standbyDevices: false,
         startTime: 0,
        }
    },
  methods: {
    gswitch: function() {
        this.isBubble = !this.isBubble
    },
    timeswitch: function(newTime) {
        this.timeScale = newTime;
    },
    standbyswitch: function() {
      this.standbyDevices = !this.standbyDevices
    },
    clickHandler() {
      console.log("recorded click");
      this.$store.commit("incrementAnalytics");
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
    this.$store.commit("incrementTimeAnalytics", current2.getTime()-this.startTime);
  },
};
</script>

<style module>
.home{
  display: flex;
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}

.dbut{
  position: fixed;
  bottom: 70px;
  width: 95.5%;
}

.sdbutton{
  width: 95%;
}

.card{
  width: 95%;
  margin-top: 10px;
}

.selectTime{
  display: flex;
  justify-content: center;
}

</style>