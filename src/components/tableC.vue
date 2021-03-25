<template>
  <table class="pure-table pure-table-bordered">
    <thead class="baseBlue">
    <tr>
      <th v-for="item in thData">{{item}}</th>
      <th>编辑</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in tableData" :key="item.id">
      <td>{{item.stnClass}}</td>
      <td>{{item.stnCount}}人</td>
      <td>{{item.teacher}}</td>
      <td>{{item.classTime}}</td>
      <td><div class="divBtn baseBlue" @click="upData(item)">修改</div></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: "tableC",
    props:['tableData','thData'],
    created() {
    },
    mounted () {
    },
    methods: {
      upData (val) {
        this.$emit('upData',val)
      }
    }
  }
</script>

<style scoped>
  .divBtn {
    margin: 5px;
    padding: 5px;
    color: white;
    border-radius: 3px;
  }
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 10px;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;

  }
  td,th {
    padding: 0;
  }

  .pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }

  .pure-table caption {
    color: #000;
    font: italic 85%/1 arial,sans-serif;
    padding: 1em 0;
    text-align: center;
  }

  .pure-table td,.pure-table th {
    border-left: 2px solid #cbcbcb;
    border-width: 0 0 0 1px;
    font-size: inherit;
    margin: 0;
    overflow: visible;
    padding: .5em 1em;
  }

  .pure-table thead {
    color: #000;
    text-align: left;
    vertical-align: bottom;
  }

  .pure-table td {
    background-color: transparent;
  }

  .pure-table-bordered td {
    border-bottom: 1px solid #cbcbcb;
  }

  .pure-table-bordered tbody>tr:last-child>td {
    border-bottom-width: 0;
  }
</style>
