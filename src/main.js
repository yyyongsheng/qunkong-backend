// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Iview from 'iview'
import store from './store'

// import 'assets/css/iview.css'
import 'iview/dist/styles/iview.css';
import 'style/index.scss'
Vue.use(Iview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    // 登录后获取资料
    if (localStorage.getItem('userInfo')) {
      this.$store.commit('SET_USER_INFO', JSON.parse(localStorage.getItem('userInfo')))
    }
    this.$store.commit('SET_SIDE_ROUTER')
  }
})
