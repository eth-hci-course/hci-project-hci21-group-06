<template>
<div class="dashboard">
  <md-content class="upper">
    <div class="upper-coins" ><div>Banked: {{currentCurrency}}
      <div class="svg-wrapper" style="display: inline-flex;align-self: center;top: .125em;position: relative;">
      <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
        <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
      </svg>
      </div></div>
    </div>
    <img src="./sandwatch.png">
    <div class="upper-kwh">Used: {{kwh}} KWH</div>
  </md-content>
  <md-content class="card-wrapper md-elevation-4" v-if="ABToggle">
    <md-card class="card md-elevation-4 md-primary" v-for="item in challenges" :key="item.title">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ item.title }}</div>
        </md-card-header-text>
        <div>
          {{ item.reward }}
          <div class="svg-wrapper" style="display: inline-flex;align-self: center;top: .125em;position: relative;">
            <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
              <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
            </svg>
          </div>
        </div>
      </md-card-header>
      <md-card-content>
        {{ item.content }}
      </md-card-content>
      <md-progress-bar class="md-accent" v-if="item.accepted" md-mode="determinate" :md-value="50" ></md-progress-bar>
      <md-card-actions v-else="">
        <md-button class="md-button md-accent" v-on:click="onConfirm(item)">Accept</md-button>
      </md-card-actions>
    </md-card>
  </md-content>

  <md-content class="list-wrapper md-elevation-4" v-else>
    <md-list class="">
      <template v-for="(item, index) in challenges">
        <md-divider v-if="index>0"></md-divider>
        <md-list-item class="listed">
          <div class="md-list-item-text" @click="item.show = true">
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
            <md-progress-bar class="md-accent" style="margin-top: 10px;" v-if="item.accepted" md-mode="determinate" :md-value="33"></md-progress-bar>
          </div>
          <div>
            {{ item.reward }}
            <div class="svg-wrapper" style="display: inline-flex;align-self: center;top: .125em;position: relative;">
              <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
                <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
              </svg>
            </div>
          </div>
          <md-dialog-confirm
              :md-active.sync="item.show"
              :md-title="item.title"
              :md-content="item.content"
              md-confirm-text="Accept"
              @md-confirm="onConfirm(item)">
          </md-dialog-confirm>
        </md-list-item>
      </template>
    </md-list>
  </md-content>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  data() {
    return {
      kwh: 42,
      ab: true,
      challenges: [
        {title: "Chill out", content: "reduce the energy usage of your fridge over the next 7 days by 30%", reward: 120, show: false, accepted: false},
        {title: "Clean dishes", content: "Over the next 30 days, use your dishwasher only once per day", reward: 120, show: false, accepted: false},
        {title: "Good cooking", content: "Never use more than two stove plates at once for a week", reward: 120, show: false, accepted: false},
        {title: "Not always on", content: "Turn off your Laptop and PC during the night for a whole month", reward: 120, show: false, accepted: false},
        {title: "Two wheels", content: "Dont use your electric car and exclusively use micromobility for 2 weeks", reward: 120, show: false, accepted: false},
        {title: "Not addicted", content: "Unlock your phone a maximum of 50 times per day for 20 days in a row", reward: 120, show: false, accepted: false},
        {title: "Green food", content: "This challenge involved multiple requirements. Over the period of 30 days, never use your oven, only use your stove every other day and dont use any other electric kitchen appliances.", reward: 120, show: false, accepted: false},
        {title: "Reality > TV", content: "Stop using your TV for a whole month", reward: 120, show: false, accepted: false},
        {title: "Sunny", content: "Expand the solar panels on your roof by at least 1'000CHF", reward: 120, show: false, accepted: false},
      ]
    }
  },
  methods: {
    onConfirm(item) {
      item.accepted = true
    },
    keyDownHandler(e) {
      console.log(e.key)
      this.ab = !this.ab;
    },
  },
  created() {
    window.addEventListener('keydown', this.keyDownHandler)
  },
  computed: mapState({
    ABToggle: state => state.ABTests.ABToggle,
    currentColor: state => state.themes.currentTheme.accent,
    currentCurrency: state => state.currency.currentCurrency,
  })
}
</script>

<style lang="css" scoped>
img {
  height:200px;
  width:200px;
  margin-left: auto;
  margin-right:auto;
}
.dashboard {
  display:flex;
  flex-direction: column;
}
.upper {
  justify-content: center;
  font-size: xx-large;
  display: flex;
  flex-direction: column;
  margin: 10px;
}
.upper-text {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upper-kwh {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.upper-coins {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-wrapper {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  margin: 10px;
  overflow-x:hidden;
}
.card {
  margin: 10px;
}

.list-wrapper {
  overflow: scroll;
  height: 50%;
  margin: 10px;
}
.listed {
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>