import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/page/indexPage'
import page01A from '@/page/testPage/page01-a'
import flexTest from "@/page/flexTest";
import Table1 from '@/page/table/table1'
const refTest = () => import('../page/testPage/refTest') //路由懒加载

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
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/refTest',
      name: 'refTest',
      component: refTest
    }
  ]
})
//导航守卫 监听路由 路由跳转会触发
router.beforeEach(function (to,from,next) {
  next() //必须用next()
})
router.afterEach(function (to, from) {
})
export default router
