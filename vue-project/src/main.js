import Vue from 'vue'
import App from './App.vue'

// 引入router.js中的router对象
import router from "./router/router.js"

// 引入vue-resource插件，请求api获取数据
import VueResource from "vue-resource"

// 使用插件
Vue.use(VueResource)

new Vue({
  el: '#app',
  // 路由注册
  router,
  render: h => h(App)
})
