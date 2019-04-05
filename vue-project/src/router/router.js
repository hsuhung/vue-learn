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
import Vue10 from "../components/vue10/Vue10.vue"

import Vue11 from "../components/vue11/Vue11.vue"

import Vue12 from "../components/vue12/Vue12.vue"
    //子组件；推荐子组件开头使用缩进，便于阅读
    import Vue12_Home from "../components/vue12/components/Home.vue"
    import Vue12_News from "../components/vue12/components/News.vue"

import Vue13 from "../components/vue13/Vue13.vue"
    import Vue13_Home from "../components/vue13/components/Home.vue"
    import Vue13_News from "../components/vue13/components/News.vue"
    import Vue13_Product from "../components/vue13/components/Product.vue"
    import Vue13_Content from "../components/vue13/components/Content.vue"


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
  {path: "/vue10", component: Vue10},
  {path: "/vue11", component: Vue11},
  {path: "/vue12", component: Vue12, children: [//子组件路由配置
      {path: "/vue12_home", component: Vue12_Home},
      {path: "/vue12_news", component: Vue12_News}
    ]},
  {path: "/vue13", component: Vue13, children: [//子组件路由配置
      {path: "/vue13_home", component: Vue13_Home},
      {path: "/vue13_news", component: Vue13_News},
      {path: "/vue13_product", component: Vue13_Product},//get传值  使用this.$route.query取数据
      {path: "/vue13_content/:newsId", component: Vue13_Content}//动态路由  使用this.$route.params取数据
    ]},

  // 默认路由
  {path: "*", component: Vue01},
  {path: "/remark", component: Remark},

]


// 实例化
const router = new VueRouter({
  //相当于routes:routes
  routes,
  mode: "history" //hash模式改为history模式；可以去除地址中的#号
})


// 导出router对象,在main.js中引入使用
export default router
