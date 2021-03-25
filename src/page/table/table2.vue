<template>
  <div class="table2 baseGrey">
    <div class="table_1"><table-c :tableData="tableData1" :thData="thData" @upData="upDataShow"></table-c></div>
    <div class="table_2"><table-d></table-d></div>
    <!--    <div class="table_2"><table-d></table-d></div>-->
    <!--    <div class="table_2"><table-d></table-d></div>-->
    <div class="table_last"></div>
    <alert-mode v-show="upDataShowFlag" @closeAlert="closeAlert" @confirm="confirmChange">
      <template v-slot:title><h3>编辑</h3></template>
      <template v-slot:content>
        <div class="upDataDiv">
          <div class="divTitle">
            <div class="divTitleItem" v-for="item in thData">{{item}}:</div>
          </div>
          <div class="divInput">
            <div class="divInputItem"><input v-model="upData.stnClass"/></div>
            <div class="divInputItem"><input v-model="upData.stnCount"/></div>
            <div class="divInputItem"><input v-model="upData.teacher"/></div>
            <div class="divInputItem"><input v-model="upData.classTime"/></div>
          </div>
        </div>
      </template>
    </alert-mode>
  </div>
</template>

<script>
  import tableC from "../../components/tableC";
  import tableD from "../../components/tableD";
  import alertMode from "../../components/alertMode";
  export default {
    name: "table2",
    components:{tableC,tableD,alertMode},
    data () {
      return {
        tableData1: [],
        upDataShowFlag: false,
        upData: {},
        thData: ['班级','人数','班主任','时间']
      }
    },
    created() {
      for (let i=0;i<5;i++) {
        this.tableData1[i]={
          id:i,
          stnClass:'班级-' + i*10,
          stnCount: 10,
          teacher: '老陈',
          classTime:'2021-02-'+ (i*2+10) + ' -> 2021-02-' + (i*3+15),
          classType: '舞蹈'+ i*10
        }
      }
      console.log(this.tableData1)
    },
    methods: {
      upDataShow(val) {
        this.upDataShowFlag = true
        this.upData = val
        console.log(val)
      },
      closeAlert () {
        this.upDataShowFlag = false
      },
      confirmChange () {
        for (let i=0; this.tableData1.length > i;i++) {
          if(this.tableData1[i].id === this.upData.id){
            this.$set(this.tableData1,i,this.upData) //数组对象单独修改一行，用$set方法才能生效
          }
        }
        this.closeAlert()
      }
    }
  }
</script>

<style scoped>
  .upDataDiv {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .divTitleItem {
    text-align: right;
    padding: 10px;
    margin-bottom: 2px;
  }
  .divInputItem {
    padding: 10px;
  }
  .divInputItem input {
    border-radius: 2px;
  }
  .table2 {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    /*border-radius: 10px;*/
    min-height: 60%;
    max-height: 90%;
    overflow-x: auto;
  }
  .table_1,.table_2,.table_last {
    display: flex;
    justify-content: center;
    width: 97%;
    background-color: white;
    border-radius: 10px;
    margin-top: 5px;
    padding: 1%;
  }
  .table_last {
    min-height: 200px;
  }
</style>
