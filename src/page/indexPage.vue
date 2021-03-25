<template>
  <div class="mainDiv">
    <template v-if="!appMode" >
      <div class="leftDiv">
        <div class="topDiv">
          <div class="backBtn" @click="backBtn">返回</div>
        </div>
        <div class="catalog">
          <div v-for="item in catalogData" class="catalogFa" :key="item.key">
            <div class="catalogFather" @click="catalogFatherOp(item.key)" :id="'catalogFather-'+ item.key">{{item.faName}}</div>
            <template v-if="item.childName && item.childName.length>0 && item.catalogFlag">
              <div class="catalogChild" v-for="childItem in item.childName" @click.stop="catalogChildOp(childItem.path)">{{childItem.name}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="rightDiv">
        <div class="headDiv"></div>
        <div class="centerDiv">
          <router-view></router-view>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="appMainDiv baseGrey">
        <div class="appTopDiv baseRed"></div>
        <div class="appContentDiv"></div>
        <div class="appBottomDiv baseBlue"></div>
      </div>
    </template>
  </div>
</template>

<script>
  import {catalogData} from "../assets/js/tableData";

  export default {
    data() {
      return {
        activeIndex: '1',
        showFlag: false,
        count:1,
        catalogData: catalogData,
        //菜单栏最后点击对象
        catalogOldClick : 0,
        windowHeight:0,
        windowWidth:0,
        //手机模式 移动网页
        appMode: false
      }
    },
    computed: {
    },
    created() {
      this.windowWidth = document.documentElement.clientWidth
      this.windowHeight = document.documentElement.clientHeight
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
    },
    // <!--在watch中监听实时宽高-->
    watch: {
      windowHeight (val) {
        //console.log("实时屏幕高度：",val, this.windowHeight );
      },
      windowWidth (val) {
        this.appMode = this.windowWidth < 750
        //console.log("实时屏幕宽度：",val, this.windowHeight );
      }
    },
    methods: {
      backBtn () {
        this.$router.go(-1)
      },
      catalogFatherOp (key) {
        this.catalogData.forEach((item)=>{
          if(item.key===key) {
            if (key === 1) {
              item.catalogFlag = !item.catalogFlag
            }
            if (!!item.path) {
              //如果不是重复点击，点了其他选项
              if (key !== this.catalogOldClick) {
                this.initCatalog()
              }

              if (key !== 1 && !item.catalogFlag) {
                this.$router.push(item.path)
                item.catalogFlag = !item.catalogFlag
                console.log(item.path)
              }
            }
            this.catalogOldClick = key
            //item.catalogFlag = true
            //item.childName[1] = '时间'+ this.count
            //this.$set(item.childName,1,this.count)
          }
        })
      },
      initCatalog () {
        this.catalogData.forEach((item) => {
          item.catalogFlag = false
          //this.$router.push('/')
        })
      },
      catalogChildOp(path) {
        console.log(path)
        this.$router.push({path:path,query: {tableId:11,other:'22'}})
      }
    },
  }
</script>

<style scoped>
  .mainDiv {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    background: url("../../static/img/gamersky_01origin_01_2016781727DBA.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .leftDiv {
    flex: 0 0 150px;
    background-color: #2c3e50;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .topDiv {
    flex:0 0 30px;
    background-color: black;
  }
  .backBtn {
    width: 50px;
    line-height: 30px;
    background-color: #cccccc;
    text-align: center;
    color: white;
  }
  .catalog {
    flex: 1;
    display: flex;
    flex-direction: column;
    color: white;
    padding-top: 40px;
  }
  .catalogFa {
    flex: 0 0 45px;
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
  }
  .catalogFather {
    flex: 0 0 30px;
    padding: 5px;
  }
  .catalogChild {
    font-size: 12px;
    background-color: black;
    padding: 5px;
  }
  .rightDiv {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .headDiv {
    flex: 0 0 30px;
    background-color: black;
    opacity: 0.3;
  }
  .centerDiv {
    padding: 10px;
    flex: 1;
    max-height: 90%;
  }
  /*  移动模式*/
  .appMainDiv {
    width: 100vw;
    height: 100vh;
  }
  .appTopDiv {
    width: 100vw;
    position: fixed;
    top:0;
    left: 0;
    min-height: 44px;
  }
  .appBottomDiv {
    width: 100vw;
    position: fixed;
    bottom:0;
    left: 0;
    min-height: 44px;
  }
</style>
