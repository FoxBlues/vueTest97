<template>
  <div class="modal-backdrop" @click="closeMsg">
    <div class="msgAlert">{{msg}}</div>
  </div>
</template>

<script>
    export default {
        name: "msgAlert",
        data() {
          return {
            msgData: ''
          }
        },
        props:{
          msg:{
            type:String,
            default:'这是个提示框!'
          }
        },
        created() {
          this.msgData = this.msg
        },
        methods: {
          closeMsg () {
            this.$emit('closeMsg')
          }
        }
    }
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .msgAlert {
    padding: 10px 10px;
    min-height: 50px;
    min-width: 100px;
    line-height: 50px;
    text-align: center;
    border-radius: 16px;
    background-color: white;
    z-index: 9;
  }
</style>
