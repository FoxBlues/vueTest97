<template>
  <div ref="page" class="page">
    <h3>宽度{{windowWidth}}高度{{windowHeight}}</h3>
    <div v-if="appMode">手机模式</div>
  </div>
</template>

<script>
  export default {
    name: "watchWindow",
    data(){
      return{
        windowWidth: 0,  //实时屏幕宽度
        windowHeight: 0,   //实时屏幕高度
        appMode: false
      }
    },
    methods: {
    },
    created() {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
    },
    // <!--在watch中监听实时宽高-->
    watch: {
      windowHeight (val) {
        //console.log("实时屏幕高度：",val, this.windowHeight );
      },
      windowWidth (val) {
        if (this.windowWidth < 900) {
          this.appMode = true
        }
        //console.log("实时屏幕宽度：",val, this.windowHeight );
      }
    },
    mounted() {
      let that = this;
      // <!--把window.onresize事件挂在到mounted函数上-->
      window.onresize = () => {
        return (() => {
          that.windowHeight = document.documentElement.clientHeight;  // 高
          that.windowWidth = document.documentElement.clientWidth; // 宽
        })()
      }
    }
  }
</script>

<style scoped>
 .page {
   width: 100%;
   background-color: white;
   min-height: 200px;
 }
</style>
