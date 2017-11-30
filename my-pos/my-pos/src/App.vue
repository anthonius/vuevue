<template>
  <div>
    <center> <img src="~assets/img/logo-blibli.png"> </center>
    <div id="app">
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
