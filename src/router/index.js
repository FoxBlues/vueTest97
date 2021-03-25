import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/page/indexPage'
import page01A from '@/page/testPage/page01-a'
import flexTest from "@/page/flexTest";
import Table1 from '@/page/table/table1'
import Table2 from '@/page/table/table2'
const refTest = () => import('../page/testPage/refTest') //路由懒加载
const phoneTest = () => import('../page/phoneTest/phoneTest') //路由懒加载
const alertPage = () =>import('../page/testPage/alertPage')
const watchWindow = () =>import('../page/testPage/watchWindow')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'indexPage',
      component: IndexPage,
      children:[
        {
          path:'table1',
          name:'table1',
          component: Table1
        },
        {
          path:'table2',
          name:'table2',
          component: Table2
        },
        {
          path: 'refTest',
          name: 'refTest',
          component: refTest
        },
        {
          path: 'alertPage',
          name: 'alertPage',
          component: alertPage
        },
        {
          path: 'watchWindow',
          name: 'watchWindow',
          component: watchWindow
        },
      ]
    },
    {
      path: '/phoneTest',
      name: 'phoneTest',
      component: phoneTest
    },

  ]
})
//导航守卫 监听路由 路由跳转会触发
router.beforeEach(function (to,from,next) {
  next() //必须用next()
})
router.afterEach(function (to, from) {
})
export default router
