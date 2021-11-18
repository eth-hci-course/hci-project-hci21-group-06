<template>
  <div class="settingspage">
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

    <md-button @click="delPressed=true">Delete Account</md-button>
    <md-dialog-confirm
        :md-active.sync="delPressed"
        md-title="Delete Account?"
        md-content="Are you sure you want to delete your account? This action cannot be undone!"
        md-confirm-text="Agree"
        md-cancel-text="Disagree"
        @md-cancel="onCancel"
        @md-confirm="onConfirm" />
    <md-dialog-confirm
        :md-active.sync="showDebug"
        md-title="Delete Account?"
        md-content="Are you sure you want to delete your account? This action cannot be undone!"
        md-confirm-text="Close"
        @md-confirm="onCancel">
      <p>Dashboard: {{clicksDashboard}}</p>
      <p>Ranking: {{clicksRanking}}</p>
      <p>Shop: {{clicksShop}}</p>
      <p>Analytics: {{clicksAnalytics}}</p>
      <p>Settings: {{clicksSettings}}</p>
    </md-dialog-confirm>
    <!-- If you want to show what the value of the params is  -->
    <!-- <table>
      <tr>
        <th>Daily Notification</th>
        <th>Show Contacts</th>
        <th>Newsletter</th>
        <th>Incognito</th>
      </tr>

      <tr>
        <td>{{ boolean_daily }}</td>
        <td>{{ boolean_contacts }}</td>
        <td>{{ boolean_newsletter }}</td>
        <td>{{ boolean_incognito }}</td>
      </tr>
    </table> -->

  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: 'RegularSwitch',
    delPressed: false,
    showDebug: false,
    data: () => ({
      array: [],
      boolean_daily: true,
      boolean_contacts: true,
      boolean_newsletter: false,
      boolean_incognito: false,
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
      }

    },
    created() {
      window.addEventListener('click', this.clickHandler);
    },
    beforeDestroy() {
      window.removeEventListener('click', this.clickHandler);
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
</style>