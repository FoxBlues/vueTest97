<template>
  <div id="phoneTest">
    <header></header>
    <main>
      <template v-for="i in 10">
        <div class="divPadding"></div>
      </template>
      <div class="bottomDiv"></div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
  export default {
    name: "phoneTest"
  }
</script>

<style>
  #phoneTest {
    width: 100%;
  }
  header {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 20vw;
    background: darkorange;
    z-index: 1;
  }
  main {
    /*position: relative;*/
    /*top: 20vw;*/
    width: 100%;
    /*margin: 20vw 0;*/
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: 20vw;
    padding: 0 5vw;
    box-sizing: border-box;
    height: calc(100vh - 36vw);
    display: flex;
    flex-direction: column;
    z-index: 0;
  }
  main::-webkit-scrollbar {
    display: none;
  }
  .divPadding {
    margin-top: 5vw;
    width: 100%;
    flex: 0 0 100px;
    background: aquamarine;
    overflow: hidden;
  }
  .bottomDiv {
    width: 100%;
    flex: 0 0 5vw;
  }
  footer {
    width: 100%;
    height: 16vw;
    background: #b3d4fc;
    position: fixed;
    bottom:0;
    left: 0;
    z-index: 1;
    overflow: hidden;
  }
</style>
