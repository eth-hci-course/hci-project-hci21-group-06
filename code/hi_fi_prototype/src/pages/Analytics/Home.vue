<template>
  <div class="home">
    <md-toolbar :md-elevation="2">
        <span v-if="isBubble" class="md-title">Bubble chart</span>
        <span v-else class="md-title">Graph</span>
    </md-toolbar>
    <md-card class="card selectTime">
      <md-card-content>
        <md-button v-if="timeScale == 'hour'" class="md-raised md-accent">Hour</md-button>
        <md-button v-else v-on:click="timeswitch('hour')">Hour</md-button>
        <md-button v-if="timeScale == 'day'" class="md-raised md-accent">Day</md-button>
        <md-button v-else v-on:click="timeswitch('day')">Day</md-button>
        <md-button v-if="timeScale == 'month'" class="md-raised md-accent">Month</md-button>
        <md-button v-else v-on:click="timeswitch('month')">Month</md-button>
      </md-card-content>
    </md-card>
    <md-card class="card">
      <md-card-content>
        <LineChartHour v-if="timeScale == 'hour'"/>
        <LineChartDay v-if="timeScale == 'day'"/>
        <LineChartMonth v-if="timeScale == 'month'"/>
      </md-card-content>
    </md-card>
    <md-button v-on:click="gswitch()" class="md-fab">
      <md-icon v-if="isBubble">show_chart</md-icon>
      <md-icon v-else>bubble_chart</md-icon>
    </md-button>
  </div>
</template>

<script>
  import LineChartHour from "./Components/LineChartHour.vue"
  import LineChartDay from "./Components/LineChartDay.vue"
  import LineChartMonth from "./Components/LineChartMonth.vue"

  export default {
  name: "Home",
  components: {
    LineChartHour,
    LineChartDay,
    LineChartMonth
  },
  data() {
       return {
          isBubble: false,
          timeScale: "hour"
        }
    },
  methods: {
    gswitch: function() {
        this.isBubble = !this.isBubble
    },
    timeswitch: function(newTime) {
        this.timeScale = newTime;
    }
  }
};
</script>

<style module>
.home{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
}

.md-fab{
  margin-top: 70px;
  left: 80%;
}

.card{
  width: 95%;
  margin-top: 10px;
}
</style>