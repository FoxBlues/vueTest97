<template>
    <div class="mainDiv">
      <div class="headDiv"></div>
      <div class="bodyDiv">
        <div class="leftDiv"></div>
        <div class="centerDiv">
          <router-view></router-view>
        </div>
        <div class="rightDiv"></div>
      </div>
      <div class="footDiv"></div>
    </div>
</template>

<script>
    export default {
        name: "flexTest"
    }
</script>

<style scoped>
  .mainDiv{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .headDiv {
    min-height: 150px;
    background: #cccccc;
  }
  .bodyDiv {
    flex:1;
    background: pink;
    display: flex;
  }
  .footDiv {
    min-height: 80px;
    background: #cccccc;
  }
  .leftDiv{
    background: #76d49b;
    flex: 0 0 100px;
  }
  .centerDiv {
    flex: 1;
    background: #34a1fc;
  }
  .rightDiv {
    flex: 0 0 100px;
    background: #b3d4fc;
  }
</style>
