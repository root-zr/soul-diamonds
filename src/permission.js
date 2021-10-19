import router from "./router"

// 路由判断登陆，根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登陆权限
    const token = localStorage.getItem("token")
    console.log("--------" + token)
    if (token) { // 判断当前的token是否存在： 登陆存入的token
      if (to.path === '/login') {
        console.log('')
      } else {
        next()
      }
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
