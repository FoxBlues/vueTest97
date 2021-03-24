<template>
  <h3 class="text-center red">圆白菜不好吃<a @click="clickChild">点击</a></h3>
</template>

<script>
    export default {
        name: "testComponents",
        props: {
          name: {
            type:String,
            default:''
          }
        },
        data () {
          return {
            val: this.name
          }
        },
        methods: {
          clickChild () {
            console.log(1)
            this.$emit('childCilck',this.val)
          }
        }
    }
</script>

<style scoped>

</style>
