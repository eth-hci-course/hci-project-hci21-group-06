<template>
  <div class="settingspage">
    <div v-if="showDebug">
      <h2>Clicks</h2>
      <p>Dashboard: {{clicksDashboard}}</p>
      <p>Ranking: {{clicksRanking}}</p>
      <p>Shop: {{clicksShop}}</p>
      <p>Analytics: {{clicksAnalytics}}</p>
      <p>Settings: {{clicksSettings}}</p>
      <br>
      <h2>Time</h2>
      <p>Dashboard: {{Math.round(timeDashboard/1000)}}s</p>
      <p>Ranking: {{Math.round(timeRanking/1000)}}s</p>
      <p>Shop: {{Math.round(timeShop/1000)}}s</p>
      <p>Analytics: {{Math.round(timeAnalytics/1000)}}s</p>
      <p>Settings: {{Math.round(timeSettings/1000)}}s</p>
      <md-button @click="switchAB(true)" class="md-raised md-primary">Set A</md-button><md-button @click="switchAB(false)" class="md-raised md-primary">Set B</md-button>
      <md-button @click="showDebug=false" class="md-raised md-accent">Close Debug</md-button>
    </div>
    <div v-else>
      <center><p><font size="7"> Settings </font></p></center>
      <br />

      <md-avatar class="md-avatar-icon md-large md-primary">
       <md-icon>person_outline</md-icon>
      </md-avatar>

      <center><p><font size="5"><b>Your Name</b></font></p></center>
      <br><br>
      <p style="text-align:left"><md-switch v-model="boolean_daily">Daily Notification</md-switch></p> <br>
      <p style="text-align:left"><md-switch v-model="boolean_contacts">Show Contacts</md-switch></p> <br>
      <p style="text-align:left"><md-switch v-model="boolean_newsletter">Email Newsletter</md-switch></p> <br>
      <p style="text-align:left"><md-switch v-model="boolean_incognito">Incognito Mode</md-switch></p> <br>

      <md-button @click="delPressed=true" class="md-accent md-raised delbutton">Delete Account</md-button>
      <md-dialog-confirm
          :md-active.sync="delPressed"
          md-title="Delete Account?"
          md-content="Are you sure you want to delete your account? This action cannot be undone!"
          md-confirm-text="Agree"
          md-cancel-text="Disagree"
          @md-cancel="onCancel"
          @md-confirm="onConfirm" />
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'RegularSwitch',
    data: () => ({
      delPressed: false,
      showDebug: false,
      array: [],
      boolean_daily: true,
      boolean_contacts: true,
      boolean_newsletter: false,
      boolean_incognito: false,
      startTime: 0,
    }),
    methods: {
      clickHandler() {
        console.log("recorded click in settings");
        this.$store.commit("incrementSettings");
      },
      onConfirm() {
        this.showDebug=true;
      },
      onCancel() {
        this.showDebug=false;
        this.delPressed=false;
      },
      switchAB(newVal) {
        this.$store.commit("setAB", newVal);
      }

    },
    created() {
      window.addEventListener('click', this.clickHandler);
      const current = new Date();
      this.startTime = current.getTime();
    },
    beforeDestroy() {
      window.removeEventListener('click', this.clickHandler);
      const current2 = new Date();
      this.$store.commit("incrementTimeSettings", current2.getTime()-this.startTime);
    },
    computed: {
      ...mapState({
        ABToggle: state => state.ABTests.ABToggle,
        currentColor: state => state.themes.currentTheme.accent,
        clicksDashboard: state => state.ABTests.clicksDashboard,
        clicksRanking: state => state.ABTests.clicksRanking,
        clicksShop: state => state.ABTests.clicksShop,
        clicksAnalytics: state => state.ABTests.clicksAnalytics,
        clicksSettings: state => state.ABTests.clicksSettings,
        timeDashboard: state => state.ABTests.timeDashboard,
        timeRanking: state => state.ABTests.timeRanking,
        timeShop: state => state.ABTests.timeShop,
        timeAnalytics: state => state.ABTests.timeAnalytics,
        timeSettings: state => state.ABTests.timeSettings,
      }),
    }
  }
</script>

<style lang="css" scoped>
  .settingspage{
    margin: 40px;
  }

  .md-switch {
    margin: auto;
  }

  table {
    width: 100%;
    table-layout: fixed;
  }

  .md-avatar {
  /* width: 80%; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  }

  .card {
    width: 80%;
    background-color: red;
    color: white;
    margin: auto;
    text-align: center;
    border-radius: 20px;
  }
  .delbutton {
    margin-left: 0px;
  }
</style>