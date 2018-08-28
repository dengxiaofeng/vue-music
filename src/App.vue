<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view/>
    <player></player>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
import MHeader from 'components/m-header/m-header'
import Player from 'components/player/player'
export default {
  name: 'App',
  components: {
    Tab,
    MHeader,
    Player
  }
}
</script>
