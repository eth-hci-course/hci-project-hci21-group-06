<template>
  <div>
    <center><p><font size="7"> Settings </font></p></center>
    <br />

    <md-avatar class="md-avatar-icon md-large md-primary">
     <md-icon>person_outline</md-icon>
    </md-avatar>

    <center><p><font size="5"><b>Your Name</b></font></p></center>

    <p style="text-align:left"><md-switch v-model="boolean_daily">Daily Notification</md-switch></p> <br>
    <p style="text-align:left"><md-switch v-model="boolean_contacts">Show Contacts</md-switch></p> <br>
    <p style="text-align:left"><md-switch v-model="boolean_newsletter">Email Newsletter</md-switch></p> <br>
    <p style="text-align:left"><md-switch v-model="boolean_incognito">Incognito Mode</md-switch></p> <br> 

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

      <md-card class="card">

      <md-card-content>
        <b>Delete account</b> 
      </md-card-content>

    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'RegularSwitch',
    data: () => ({
      array: [],
      boolean_daily: true,
      boolean_contacts: true,
      boolean_newsletter: false,
      boolean_incognito: false,
    })
  }
</script>

<style lang="css" scoped>
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