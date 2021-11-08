<template>
  <div>

    <p><font size="7"> Settings </font></p>
    <br /> 

    <md-avatar class="md-avatar-icon md-large md-primary">
     <md-icon>person_outline</md-icon>
    </md-avatar>

    <center><p><font size="5"><b>Jane Doe</b></font></p></center>

    <md-switch v-model="boolean_daily">Daily Notification</md-switch>
    <md-switch v-model="boolean_contacts">Show Contacts</md-switch>
    <md-switch v-model="boolean_newsletter">Email Newsletter</md-switch>
    <md-switch v-model="boolean_incognito">Incognito Mode</md-switch>
    <md-switch v-model="boolean_reserve1">Reserve 1</md-switch>
    <md-switch v-model="boolean_reserve2" >Reserve 2</md-switch>

    <table>
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
    </table>
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
      boolean_reserve1: true,
      boolean_reserve2: true
    })
  }
</script>

<style lang="css" scoped>
  .md-switch {
    display: flex;
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
</style>