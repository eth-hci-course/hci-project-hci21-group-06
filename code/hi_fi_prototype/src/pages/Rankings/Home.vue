<template>
  <div style="text-align: center">
    <div class="upper">
      <div class="dropdownwrapper" v-if="ab">
        <md-field class="dropdown">
          <label for="timeID">Time</label>
          <md-select v-model="timeID" name="timeID" id="timeID" @input="updateDrop()">
            <md-option value="0">{{ times[0].display }}</md-option>
            <md-option value="1">{{ times[1].display }}</md-option>
            <md-option value="2">{{ times[2].display }}</md-option>
            <md-option value="3">{{ times[3].display }}</md-option>
          </md-select>
        </md-field>
        <md-field class="dropdown">
          <label for="groupID">Group</label>
          <md-select v-model="groupID" name="groupID" id="groupID" @input="updateDrop()">
            <md-option value="0" >{{groups[0].display}}</md-option>
            <md-option value="1">{{groups[1].display}}</md-option>
            <md-option value="2">{{groups[2].display}}</md-option>
            <md-option value="3">{{groups[3].display}}</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="sliderwrapper" v-else>
        <div class="sliderrow">
          <md-button class="md-primary sliderButton" @click="slide(false, false)"><span class="md-headline">&lt;</span></md-button>
          <div class="sliderText"><span class="md-headline">{{selectedTime.display}}</span></div>
          <md-button class="md-primary sliderButton" @click="slide(true, false)"><span class="md-headline">&gt;</span></md-button>
        </div>
        <div class="sliderrow">
          <md-button class="md-primary sliderButton" @click="slide(false, true)"><span class="md-headline">&lt;</span></md-button>
          <div class="sliderText"><span class="md-headline">{{selectedGroup.display}}</span></div>
          <md-button class="md-primary sliderButton" @click="slide(true, true)"><span class="md-headline">&gt;</span></md-button>
        </div>
      </div>
    </div>
    <md-content class="listwrapper md-elevation-4">
      <span class="md-headline">{{selectedTime.display}} {{selectedGroup.display}}-Ranking</span>
      <md-list>
        <template v-for="(item, index) in ranking">
          <md-divider v-if="index > 0"></md-divider>
          <md-list-item v-if="item.place==='fill'">
            <div class="md-list-item-text">...
            </div>
          </md-list-item>
          <md-list-item v-else>
            <div class="md-list-item-text md-title" v-if="item.name=='You'">
              {{ item.place }}
              {{ item.name}}
            </div>
            <div class="md-list-item-text" v-else>
              {{ item.place }}
              {{ item.name}}
            </div>
            <div class="md-list-action">
              {{ item.score }}
              <div class="svg-wrapper" style="display: inline-flex;align-self: center;top: .125em;position: relative;">
                <svg width="1em" height="1em" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="23.5" :stroke="currentColor" stroke-width="3"/>
                  <path d="M15 25L31 7L26 22L35 25L19 43L24 28L15 25Z" :fill="currentColor"/>
                </svg>
              </div>
            </div>
          </md-list-item>
        </template>
      </md-list>

    </md-content>
  </div>
</template>

<script>
  import {rankings} from './Components/RankingData.js';
  import { mapState } from 'vuex'

  export default {
    name: 'ranking',
    data: () => ({
      ab: true,
      selectedGroup: {name: "family", display: "Family"},
      groupID: 0,
      groups: [
        {name: "family", display: "Family"},
        {name: "friends", display: "Friends"},
        {name: "country", display: "Country"},
        {name: "world", display: "Worldwide"},
      ],
      selectedTime: {name: "day", display: "Daily"},
      timeID: 0,
      times: [
        {name: "day", display: "Daily"},
        {name: "week", display: "Weekly"},
        {name: "month", display: "Monthly"},
        {name: "year", display: "Yearly"},
      ],
      ranking: [
        {place: 1, name: "Beat Astli", score: 50000},
        {place: 2, name: "Mike Peters", score: 48255},
        {place: 3, name: "Lia DaFranco", score: 48116},
        {place: 4, name: "Vivianne Lang", score: 32985},
        {place: 5, name: "Jacob Neill", score: 31267},
      ],

    }),
    methods: {
      keyDownHandler(e) {
        console.log(e.key)
        this.ab = !this.ab;
      },
      updateDrop() {
        console.log("ran update");
        this.selectedGroup = this.groups[this.groupID];
        this.selectedTime = this.times[this.timeID];
        this.ranking = rankings[this.groupID][this.timeID];
      },
      slide(right, group) {
        if(right && group) {
          this.groupID += 5;
          this.groupID %= 4;
          this.selectedGroup = this.groups[this.groupID];
        } else if (!right && group) {
          this.groupID += 3;
          this.groupID %= 4;
          this.selectedGroup = this.groups[this.groupID];
        } else if(right && !group) {
          this.timeID += 5;
          this.timeID %= 4;
          this.selectedTime = this.times[this.timeID];
        } else if (!right && !group) {
          this.timeID += 3;
          this.timeID %= 4;
          this.selectedTime = this.times[this.timeID];
        }
        this.ranking = rankings[this.groupID][this.timeID];

      }
    },
    created() {
      window.addEventListener('keydown', this.keyDownHandler)
    },
    computed: mapState({
      ABToggle: state => state.ABTests.ABToggle,
      currentColor: state => state.themes.currentTheme.accent,
    })
  }
</script>

<style lang="css" scoped>
  .upper {
    margin: 30px;
  }
  .dropdownwrapper {
    display: flex;
    justify-content: center;
  }
  .dropdown {
    width: 40%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .sliderrow {
    display: flex;
    justify-content: center;

  }
  .sliderButton {
  }
  .sliderText {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .listwrapper {
    margin: 10px;
    padding: 5px;
    padding-top: 15px;
  }
</style>