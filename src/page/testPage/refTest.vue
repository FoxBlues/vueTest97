<template>
  <div>
    <test-components ref="components1" :name="'红宝石'" @childCilck="getChildCilckMig"></test-components>
  </div>
</template>

<script>
  import TestComponents from "../../components/testComponents";
  export default {
    name: "refTest",
    components: {TestComponents},
    mounted() {
      this.toLog ()
    },
    methods: {
      toLog() {
        console.log(this.$refs.components1.innerHTML)
      },
      getChildCilckMig (val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>
