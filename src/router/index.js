import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './routers'
import iView from 'iview'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      resolve({ x: 0, y: 0 })
    })
  },
  routes: routers
})
router.beforeEach(({ meta, path, query }, from, next) => {
  iView.LoadingBar.start()
  const data = Boolean(localStorage.getItem('userInfo'))
  // if (data) {
  //   if (path === '/login' || path === '/') {
  //     next('/carousel/index')
  //   }
  //   next()
  // } else {
  //   if (path === '/login') {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

export default router