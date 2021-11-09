<template>
<div class="dashboard">
  <p class="title">Dashboard</p>
  <div class="upper">
    <p class="upper-text">you have used</p>
    <p class="upper-kwh">{{kwh}} KWH</p>
    <p class="upper-text">resulting in</p>
    <p class="upper-coins">{{coins}} C</p>
  </div>
  <div class="challenge-wrapper">
    <md-card class="challenge" v-for="item in challenges" :key="item.title">
      <md-card-header>
        <div class="md-title">{{ item.title }}</div>
      </md-card-header>
      <md-card-content>
        {{ item.content }}
      </md-card-content>
      <md-card-actions>
        <md-button><md-icon>done</md-icon></md-button>
        <md-button><md-icon>close</md-icon></md-button>
      </md-card-actions>
    </md-card>
  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      kwh: 42,
      coins: 78,
      challenges: [
        {title: "Chill out", content: "reduce the energy usage of your fridge over the next 7 days by 30%", img: ""},
        {title: "Clean dishes", content: "Over the next 30 days, use your dishwasher only once per day", img: ""},
        {title: "Good cooking", content: "Never use more than two stove plates at once for a week", img: ""},
        {title: "Not always on", content: "Turn off your Laptop and PC during the night", img: ""}
      ]


    }
  }
}
</script>

<style lang="css">
.dashboard {
    height: 100%;

}
.title {
}
.upper {
  font-size: xx-large;
}
.upper-text {
  text-align: center;
}
.upper-kwh {
  text-align: center;
}
.upper-coins {
  text-align: center;
}

.challenge-wrapper {
  width: 300%;
}
.challenge {
  margin: 5px;
  display: inline-block;
  vertical-align: top;
  max-width: 300px;
}

</style>