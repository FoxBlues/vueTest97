<template>
  <h3 class="text-center red">子组件向父组件发射信息-<a @click="clickChild">点击</a></h3>
</template>

<script>
    export default {
        name: "testComponents",
        props: {
          msg: {
            type:String,
            default:''
          }
        },
        data () {
          return {
          }
        },
        methods: {
          clickChild () {
            console.log(1)
            this.$emit('childClick',this.msg)
          }
        }
    }
</script>

<style scoped>

</style>
