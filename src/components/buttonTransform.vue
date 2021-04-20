<!--
动画按钮组件
属性
imgUrl
imgAtl
buttonWidth
buttonHeight
buttonMsg
事件
clickBtn
-->
<template>
  <div ref="buttonT" class="buttonT" @click="btnClick" @mouseover="btnOver" @mouseout="btnOut">
    <img ref="buttonI" class='buttonI' :src="imgUrl" :atl="imgAtl" :width="buttonWidth" :height="buttonHeight"/>
    <div class="buttonTB" ref="buttonTB">
      <div class="buttonMsg">{{buttonMsg}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'buttonTransform',
    props:['imgUrl','imgAtl','buttonWidth','buttonHeight','buttonMsg'],
    methods: {
      btnClick () {
        this.$emit('clickBtn')
      },
      btnOver () {
        this.$refs.buttonI.style.transform = 'scale(1.5)'
        this.$refs.buttonTB.style.opacity = '0.8'
      },
      btnOut () {
        this.$refs.buttonI.style.transform = ''
        this.$refs.buttonTB.style.opacity = '0'
      },
      initButton () {
        // this.$refs.buttonT.style.width = this.buttonWidth + 'px'
        // this.$refs.buttonT.style.height = this.buttonHeight + 'px'
        this.$refs.buttonT.style.cssText = 'width:'+ this.buttonWidth + 'px;height:' + this.buttonHeight + 'px;'
        this.$refs.buttonTB.style.cssText
          = 'width:'+ this.buttonWidth + 'px;height:' + this.buttonHeight + 'px;top:-'+this.buttonHeight + 'px;'
      }
    },
    created() {
    },
    mounted() {
      this.initButton()
    },
  }
</script>

<style scoped>
  .buttonMsg {
    color: white;
    font-size: 32px;
  }
  .buttonT {
    transition: 1s;
    overflow: hidden;
  }
  .buttonTB {
    position: relative;
    left: 0;
    opacity: 0;
    background: #222222;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: block;
    transition: 1s;
  }
</style>
