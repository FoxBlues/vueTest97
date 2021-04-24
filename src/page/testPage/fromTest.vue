<template>
  <div class="fromTest">
    <ul class="ul1">
      <li>输入框</li>
      <li>单选</li>
      <li>搜索框</li>
      <li>搜索列表</li>
    </ul>
    <ul class="ul2">
      <li><input v-model="inputTest.data1"><a>{{inputTest.data1}}</a></li>
      <li>
        <input type="radio" name="radio1" value="1" v-model="inputTest.data2"/>
        <input type="radio" name="radio1" value="2" v-model="inputTest.data2"/>
        <a>{{inputTest.data2}}</a>
      </li>
      <li >
        <select name="theSelect" v-model="inputTest.data3">
          <option >选项1</option>
          <option >选项2</option>
          <option >选项3</option>
        </select>
        <a>{{inputTest.data3}}</a>
      </li>
      <li>
        <input list="browsers" v-model="inputTest.data4"/>
        <datalist id="browsers">
          <option value="Internet Explorer"/>
          <option value="Firefox"/>
          <option value="Chrome"/>
          <option value="Opera"/>
          <option value="Safari"/>
        </datalist>
        <a>{{inputTest.data4}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "fromTest",
    data() {
      return {
        inputTest:{}
      }
    },
    created() {
      this.initData()
      console.log(this.inputTest)
    },
    methods: {
      initData () {
        for (let i = 1 ;i< 5 ;i++) {
          Object.defineProperty(this.inputTest,'data_' + i,{value:''})
        }
      }
    }
  }
</script>

<style scoped>
  .fromTest {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
    background: white;
    display: flex;
  }
  .ul1 {
    flex:0 0 80px
  }
  li {
    margin-bottom: 10px;
  }
  .ul2 {
    flex:1
  }
</style>
