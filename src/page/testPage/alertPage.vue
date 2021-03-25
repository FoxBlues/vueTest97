<template>
  <div class="alertPage">
    <button class="btn" @click="goAlert(0)">提示框</button>
    <button class="btn" @click="goAlert(1)">弹出修改框</button>
    <msg-alert v-show="msgAlertShow" @closeMsg="closeAlert(0)"></msg-alert>
    <alertMode v-show="alertModeShow" @closeAlert="closeAlert(1)"></alertMode>
  </div>
</template>

<script>
  import alertMode from "../../components/alertMode";
  import msgAlert from "../../components/msgAlert";
  export default {
    name: "alertPage",
    components:{alertMode,msgAlert},
    data () {
      return {
        alertModeShow:false,
        msgAlertShow:false
      }
    },
    methods: {
      goAlert (flag) {
        if (flag) {
          this.alertModeShow = !this.alertModeShow
        } else {
          this.msgAlertShow = !this.msgAlertShow
        }
      },
      closeAlert (flag) {
        if (flag) {
          this.alertModeShow = false
        } else {
          this.msgAlertShow = false
        }
      }
    }
  }
</script>

<style scoped>
  .alertPage {
    background-color: white;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn {
    border-radius: 8px;
    margin-left:16px;
    height: 36px;
    border:none;
    color: #fff;
    background-color: #2d8cf0;
  }
</style>
