/*路由配置*/

// 导入vue、vue-router
import Vue from "vue"
import VueRouter from "vue-router"

// 使用vue-router
Vue.use(VueRouter)


// 引入模板组件
import Remark from "../components/remark/Remark.vue"
import Vue01 from "../components/vue01/Vue01.vue"
import Vue02 from "../components/vue02/Vue02.vue"
import Vue03 from "../components/vue03/Vue03.vue"
import Vue04 from "../components/vue04/Vue04.vue"
import Vue05 from "../components/vue05/Vue05.vue"
import Vue06 from "../components/vue06/Vue06.vue"
import Vue07 from "../components/vue07/Vue07.vue"
import Vue08 from "../components/vue08/Vue08.vue"
import Vue09 from "../components/vue09/Vue09.vue"


// 路由路径配置
const routes = [
  // 路由路径需要注意写法：/路径; 错误写法 path: "./vue01"; path: "vue01"
  {path: "/vue01", component: Vue01},
  {path: "/vue02", component: Vue02},
  {path: "/vue03", component: Vue03},
  {path: "/vue04", component: Vue04},
  {path: "/vue05", component: Vue05},
  {path: "/vue06", component: Vue06},
  {path: "/vue07", component: Vue07},
  {path: "/vue08", component: Vue08},
  {path: "/vue09", component: Vue09},

  // 默认路由
  {path: "*", component: Vue01},
  {path: "/remark", component: Remark},

]


// 实例化
const router = new VueRouter({
  //相当于routes:routes
  routes
})


// 导出router对象,在main.js中引入使用
export default router
