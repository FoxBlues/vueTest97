<template>
  <div class="transformPage">
    <button-transform button-msg="按钮" @clickBtn="clickBtn" img-url="../../../static/img/镜之边缘.jpg" button-width="200" button-height="200"></button-transform>
    <msg-alert :msg="btnMsg" v-if="msgAlertShow" @closeMsg="close"></msg-alert>
  </div>
</template>

<script>
  import buttonTransform from "../../components/buttonTransform";
  import msgAlert from "../../components/msgAlert";
  import { mapState } from 'vuex'
  export default {
    name: "transformPage",
    components:{buttonTransform,msgAlert},
    data () {
      return {
        btnMsg:'',
        msgAlertShow:false
      }
    },
    mounted() {
    },
    methods: {
      clickBtn () {
        this.msgAlertShow = true
        this.btnMsg = '点击了动画按钮!'
        this.$store.dispatch('getCoinDesk').then(res=>{
          console.log(res)
        })
      },
      close () {
        this.msgAlertShow = false
      }
    },
    computed: {
      ...mapState(['msg','testUrl'])
    }

  }
</script>

<style scoped>
  .transformPage {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: white;
  }
</style>
