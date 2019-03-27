import Vue from 'vue'
import App from './App.vue'

// 引入router.js中的router对象
import router from "./router/router.js"

new Vue({
  el: '#app',
  // 路由注册
  router,
  render: h => h(App)
})
