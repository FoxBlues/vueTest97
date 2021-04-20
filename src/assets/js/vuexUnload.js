//用call绑个this进来使用
export default {
  unloadInit: function () {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("storedata")) {
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("storedata"))))
    }
    //在页面刷新的时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
      sessionStorage.setItem('storeadata',JSON.stringify(this.$store.state))
    })
    //兼容iphone手机
    // window.addEventListener('pagehide',()=>{
    //   sessionStorage.setItem('storeadata',JSON.stringify(this.$store.state))
    // })
  }
}
