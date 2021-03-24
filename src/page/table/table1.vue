<template>
  <div class="tableDiv">
    <div class="tableMain">
      <div class="topMsg"></div>
      <div class="table">
        <div class="tableHeader"></div>
        <div class="tableBody">
          <div v-for="item of items" :key="item.id" :class="'tableItem tableItem-'+ item.id++">
            <div class="tableMsg tableMsg1">
              <div>{{item.stnClass}}</div>
              <div><a>本班学员</a></div>
            </div>
            <div class="tableMsg">10人</div>
            <div class="tableMsg">{{item.teacher}}</div>
            <div class="tableMsg tableMSg3" >{{item.classTime}}</div>
            <div class="tableMsg tableMsgLast">
              <div @click.stop="upDate()" class="upDateBtn">
                编辑
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <alertMode v-show="showModal" v-on:closeme="closeme"></alertMode>
  </div>
</template>

<script>
  import alertMode from "../../components/alertMode";
    export default {
        name: "Table1",
        data () {
          return {
            items: [],
            showModal: false
          }
        },
      components:{alertMode},
      created() {
        for (let i=0;i<5;i++) {
          this.items[i]={
            id:i,
            stnClass:'班级-' + i*10,
            teacher: '老陈',
            classTime:'2021-02-'+ i*5+25 + '2021-02-' + i*6+25,
            classType: '舞蹈'+ i*10
          }
        }
        console.log(this.items)
        console.log(this.$route.query.other)
      },
      mounted() {
      },
      methods: {
        upDate () {
          this.showModal = true
        },
        closeme () {
          this.showModal = !this.showModal
        }
      }
    }
</script>

<style scoped>
  .tableDiv{
    height: 100%;
    width: 100%;
    background-color: antiquewhite;
  }
  .table {
    height: 500px;
    border: black 1px solid;
  }
  .tableBody {
    display: flex;
    flex-direction: column;
  }
  .tableItem {
    display: flex;
  }
</style>
