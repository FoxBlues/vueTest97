<template>
  <div class="ajaxTest">
    <button @click="getData">点击请求数据</button>
    <msg-alert :msg="msg" v-if="msgAlertShow" @closeMsg="close"></msg-alert>
  </div>
</template>

<script>
  import msgAlert from "../../components/msgAlert";
  export default {
    name: "ajaxTest",
    components: {msgAlert},
    data () {
      return {
        msg: '',
        msgAlertShow: false
      }
    },
    methods: {
      close () {
        this.msgAlertShow = false
      },
      getData () {
        let theAjax = new XMLHttpRequest()
        theAjax.open('get','https://api.coindesk.com/v1/bpi/currentprice.json',true)
        theAjax.send()
        theAjax.onreadystatechange = (function () {
          if (theAjax.readyState === 4 && theAjax.status === 200 || theAjax.status === 304) {
            let data = JSON.parse(theAjax.response)
            let data2 = JSON.stringify(theAjax.response)
            console.log(data)
            console.log(data2)
            this.msg = '成功'
            this.msgAlertShow = true
          }
        }).bind(this)
      }
    }
  }
</script>

<style scoped>
  .ajaxTest {
    width: 100%;
    height: 100%;
    background: white;
  }
</style>
