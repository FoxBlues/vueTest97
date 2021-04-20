<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import vuexUnload from "./assets/js/vuexUnload";
export default {
  name: 'App',
  created() {
    // vuexUnload.unloadInit.call(this)
  }
}
</script>
<style>
@import "assets/css/baseCss.css";
</style>
