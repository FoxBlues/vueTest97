<template>
  <div class="refClass">
    <test-components ref="components1" :msg="'父组件向子组件发送的字符串'" @childClick="getChildClickMig"></test-components>
    <msg-alert v-show="isShow" :msg="childMsg" @closeMsg="close"></msg-alert>
  </div>
</template>

<script>
  import TestComponents from "../../components/testComponents";
  import msgAlert from "../../components/msgAlert";
  export default {
    name: "refTest",
    components: {TestComponents,msgAlert},
    data () {
      return {
        isShow:false,
        childMsg:''
      }
    },
    mounted() {
      this.toLog ()
    },
    methods: {
      toLog() {
        console.log(this.$refs.components1.innerHTML)
      },
      getChildClickMig (val) {
        this.childMsg = val
        this.isShow = true
      },
      close () {
        this.isShow = false
      }
    }
  }
</script>

<style scoped>
  .refClass {
    width: 100%;
    height: 200px;
    background-color: white;
  }
</style>
