<template>
<div class="dashboard">
  <md-button class="md-button md-raised" v-on:click="ab=false">List</md-button>
  <md-button class="md-button md-raised" v-on:click="ab=true">Cards</md-button>
  <br><br>
  <div class="upper">
    <div class="upper-text">you have used</div><br>
    <div class="upper-kwh md-primary">{{kwh}} KWH</div><br>
    <div class="upper-text">resulting in</div><br>
    <div class="upper-coins md-accent" >{{coins}}
      <div class="svg-wrapper" style="display: inline-flex;align-self: center;top: .125em;position: relative;">
      <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="23.5" stroke="currentColor" stroke-width="3"/>
        <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" fill="currentColor"/>
      </svg>
      </div>
    </div>
  </div>
<br>
  <div class="card-wrapper md-elevation-4" v-if="ab">
    <md-card class="card md-elevation-4" v-for="item in challenges" :key="item.title">
      <md-card-header>
        <div class="md-title">{{ item.title }}</div>
      </md-card-header>
      <md-card-content>
        {{ item.content }}
      </md-card-content>
      <md-progress-bar v-if="item.accepted" md-mode="determinate" :md-value="50" ></md-progress-bar>
      <md-card-actions v-else="">
        <md-button class="md-button" v-on:click="onConfirm(item)">Accept</md-button>
      </md-card-actions>
    </md-card>
  </div>

  <div class="list-wrapper md-elevation-4" v-else>
    <md-list>
      <template v-for="(item, index) in challenges">
        <md-divider v-if="index>0"></md-divider>
        <md-list-item class="listitem">
          <div class="md-list-item-text" @click="item.show = true">
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
            <md-progress-bar style="margin-top: 10px;" v-if="item.accepted" md-mode="determinate" :md-value="33"></md-progress-bar>
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
  </div>



</div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      kwh: 42,
      coins: 78,
      ab: false,
      challenges: [
        {title: "Chill out", content: "reduce the energy usage of your fridge over the next 7 days by 30%", img: "", show: false, accepted: false},
        {title: "Clean dishes", content: "Over the next 30 days, use your dishwasher only once per day", img: "", show: false, accepted: true},
        {title: "Good cooking", content: "Never use more than two stove plates at once for a week", img: "", show: false, accepted: false},
        {title: "Not always on", content: "Turn off your Laptop and PC during the night", img: "", show: false, accepted: false}
      ]


    }
  },
  methods: {
    onConfirm(item) {
      item.accepted = true
    }
  }
}
</script>

<style lang="css">
.dashboard {
}
.upper {
  font-size: xx-large;
}
.upper-text {
  text-align: center;
  height: 32px;
}
.upper-kwh {
  text-align: center;
  height: 32px;
}
.upper-coins {
  text-align: center;
  height: 32px;
}

.card-wrapper {
  overflow: scroll;
  max-height: 400px;
}
.card {
  margin: 10px;
}

.list-wrapper {
  max-width: 100%;
}
.listitem {
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>