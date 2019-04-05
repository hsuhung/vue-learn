<template>
    <div>

      <h3>路由</h3>

      <hr />


      <router-link to="./vue12_home">首页</router-link>
      <router-link to="./vue12_news">新闻</router-link>

      <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Vue12"
    }
</script>

<style scoped>

</style>
<!--
https://router.vuejs.org/

vue路由配置：

1.安装

npm install vue-router --save   / cnpm install vue-router  --save


2、引入并 Vue.use(VueRouter)   (main.js)

import VueRouter from 'vue-router'

Vue.use(VueRouter)

配置路由

  1、创建组件 引入组件

  2、定义路由  （建议复制s）

  const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '*', redirect: '/home' }   /*默认跳转路由*/
  ]

  3、实例化VueRouter

  const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
  })

  4、挂载

  new Vue({
  el: '#app',
  router，
  render: h => h(App)
  })

  5 、根组件的模板里面放上这句话   <router-view></router-view>

  6、路由跳转
  <router-link to="/foo">Go to Foo</router-link>
  <router-link to="/bar">Go to Bar</router-link>
-->
