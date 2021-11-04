<template>
    <div>
      <p>Settings</p>
      <button v-on:click="incognito">Incognito Mode</button>
    </div>
</template>

<script>
import { toggleIncognitoMode } from './utils'
export default {
  methods: {
    incognito: function () {
      toggleIncognitoMode()
    }
  }
}
</script>