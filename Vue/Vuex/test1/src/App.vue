<template>
  <div id="app">
    <learnvue></learnvue>
    <learnvuex></learnvuex>
    <getters></getters>
    <actions></actions>
  </div>
</template>

<script>
  import learnvue from './components/learnvue.vue'
  import learnvuex from './components/learnvuex.vue'
  import getters from './components/getters.vue'
  import actions from './components/actions.vue'
export default {
  name: 'App',
  components:{
    learnvue,
    learnvuex,
    getters,
    actions
  }
}
</script>

<style>

</style>
