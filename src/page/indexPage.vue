<template>
  <div class="mainDiv">
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
      <div class="footDiv"></div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          activeIndex: '1',
          showFlag: false,
          count:1,
          catalogData:[
            {
              key:1,
              faName:'表格',
              childName:[
                {
                  name:'表格1',
                  path: '/table1'
                },
                {
                  name:'表格2',
                  path: '/table2'
                }],
              catalogFlag: false,
              path:''
            },
            {
              key:2,
              faName:'tag标签',
              childName:[],
              catalogFlag: false,
              path:''
            },
            {
              key:3,
              faName:'进度条',
              childName:[],
              catalogFlag: false,
              path:''
            },
            {
              key:4,
              faName:'分页',
              childName:[],
              catalogFlag: false,
              path:''
            },
            {
              key:5,
              faName:'弹出框',
              childName:[],
              catalogFlag: false,
              path: '/alertPage'
            },
            {
              key:6,
              faName:'ref与子父组件',
              childName:[],
              catalogFlag: false,
              path:'/refTest'
            },
            {
              key:7,
              faName:'手机页面',
              childName:[],
              catalogFlag: false,
              path:'/phoneTest'
            }
          ],
          //菜单栏最后点击对象
          catalogOldClick : 0
        }
      },
      computed: {
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
      }
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
  }
  .footDiv {
    flex: 0 0 15px;
    background-color: aliceblue;
    opacity: 0.3;
  }


</style>
