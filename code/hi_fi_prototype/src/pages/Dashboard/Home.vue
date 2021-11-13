<template>
<div class="dashboard">
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

  <div class="card-wrapper" v-if="ab">
    <md-card class="card" v-for="item in challenges" :key="item.title">
      <md-card-header>
        <div class="md-title">{{ item.title }}</div>
      </md-card-header>
      <md-card-content>
        {{ item.content }}
      </md-card-content>
      <md-card-actions>
        <md-button class="md-icon-button"><md-icon>done</md-icon></md-button>
        <md-button class="md-icon-button"><md-icon>close</md-icon></md-button>
      </md-card-actions>
    </md-card>
  </div>

  <div class="list-wrapper" v-else>
    <md-list  v-for="item in challenges" :key="item.title">
      <md-list-item class="listitem">
        <div class="md-list-item-text">
          <span>{{ item.title }}</span>
          <span>{{ item.content }}</span>
        </div>
        <md-button class="md-icon-button"><md-icon>done</md-icon></md-button>
        <md-button class="md-icon-button"><md-icon>close</md-icon></md-button>
      </md-list-item>
      <md-divider></md-divider>
    </md-list>
  </div>


</div>
</template>

<script>
export default {
  data() {
    return {
      kwh: 42,
      coins: 78,
      ab: false,
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
  overflow-x: auto;
  white-space: nowrap;
  display: grid;
  max-width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10px, auto);
  grid-gap: 1rem;
  padding: 1rem;
}
.card {
  white-space: normal;
  margin: 5px;
  max-width: 320px;
}

.list-wrapper {
  max-width: 100%;
}
.listitem {
}
</style>