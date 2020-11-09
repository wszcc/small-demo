<template>
  <div id="app">
    <maintabbar></maintabbar>
  </div>
</template>
<script>
  import maintabbar from './ components/maintabbar/maintabbar.vue'
  export default {
    name: 'App',
    components: {
      maintabbar
    }
  }
</script>
<style>
  @import url(./assets/css/clear.css);
</style>