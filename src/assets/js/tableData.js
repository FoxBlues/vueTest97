//首要导航条数据
const catalogData = [
  {
    key:1,
    faName:'表格',
    childName:[
      {
        name:'表格1',
        path: '/table1'
      },
      {
        name:'表格2',
        path: '/table2'
      }],
    catalogFlag: false,
    path:''
  },
  {
    key:2,
    faName:'tag标签',
    childName:[],
    catalogFlag: false,
    path:''
  },
  {
    key:3,
    faName:'进度条',
    childName:[],
    catalogFlag: false,
    path:''
  },
  {
    key:4,
    faName:'分页',
    childName:[],
    catalogFlag: false,
    path:''
  },
  {
    key:5,
    faName:'弹出框',
    childName:[],
    catalogFlag: false,
    path: '/alertPage'
  },
  {
    key:6,
    faName:'ref与子父组件',
    childName:[],
    catalogFlag: false,
    path:'/refTest'
  },
  {
    key:7,
    faName:'手机页面',
    childName:[],
    catalogFlag: false,
    path:'/phoneTest'
  },
  {
    key:8,
    faName:'窗口获取',
    childName:[],
    catalogFlag: false,
    path:'/watchWindow'
  },
  {
    key:9,
    faName:'变形测试',
    childName:[],
    catalogFlag: false,
    path:'/transformPage'
  },
  {
    key:10,
    faName:'ajax测试',
    childName:[],
    catalogFlag: false,
    path:'/ajaxTest'
  }
]

const races = {
  1: {
    name: '人类'
  },
  2: {
    name: '兽人'
  },
  3: {
    name: '矮人'
  },
  4: {
    name: '暗夜精灵'
  },
  5: {
    name: '亡灵'
  },
  6: {
    name: '牛头人'
  },
  7: {
    name: '侏儒'
  },
  8: {
    name: '巨魔'
  },
  9: {
    name: '地精'
  },
  10: {
    name: '血精灵'
  },
  11: {
    name: '德莱尼'
  },
  22: {
    name: '狼人'
  },
  24: {
    name: '熊猫人'
  },
  25: {
    name: '熊猫人'
  },
  26: {
    name: '熊猫人'
  }
}

const classes = {
  1: {
    name: '战士',
    icon: '0 -52px'
  },
  2: {
    name: '圣骑士',
    icon: '-52px -26px'
  },
  3: {
    name: '猎人',
    icon: '0 0'
  },
  4: {
    name: '潜行者',
    icon: '-26px -52px'
  },
  5: {
    name: '牧师',
    icon: '-52px -52px'
  },
  6: {
    name: '死亡骑士',
    icon: '-78px 0'
  },
  7: {
    name: '萨满祭司',
    icon: '-78px -26px'
  },
  8: {
    name: '法师',
    icon: '-78px -52px'
  },
  9: {
    name: '术士',
    icon: '-26px 0'
  },
  10: {
    name: '武僧',
    icon: '0 -26px'
  },
  11: {
    name: '德鲁伊',
    icon: '-26px -26px'
  }
}

const raceIdToName = (id) => {
  return races[id].name
}
const classIdToIcon = (id) => {
  return classes[id].icon
}

export { raceIdToName, classIdToIcon, classes,catalogData}
