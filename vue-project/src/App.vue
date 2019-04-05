<template>
  <!--template下的所有内容都需要被一个根节点包起来，一般用div-->
  <div id="app">
    <div class="left">
      <h3>Vue复习资料</h3>

      <hr />

      <ol>
        <li><router-link to="./vue01">数据读取、列表渲染</router-link></li>
        <li><router-link to="./vue02">数据绑定、class绑定、style绑定</router-link></li>
        <li><router-link to="./vue03">双向数据绑定</router-link></li>
        <li><router-link to="./vue04">vue事件</router-link></li>
        <li><router-link to="./vue05">todoList实现</router-link></li>
        <li><router-link to="./vue06">todoList实现之本地存储</router-link></li>
        <li><router-link to="./vue07">组件生命周期、组件挂载与卸载</router-link></li>
        <li><router-link to="./vue08">resource、axios数据请求</router-link></li>
        <li><router-link to="./vue09">父组件传递数据到子组件</router-link></li>
        <li><router-link to="./vue10">父子组件相互取数据</router-link></li>
        <li><router-link to="./vue11">非父子组件间传递数据</router-link></li>
        <li><router-link to="/vue12_home">路由</router-link></li>
        <li><router-link to="/vue13_home">动态路由</router-link></li>
        <li><router-link to="/vue14_home">移动端样式、路由传值</router-link></li>
        <li><router-link to="/vue15_home">VueX不同组件共享数据</router-link></li>



        <li><router-link to="./remark">说明</router-link></li>
      </ol>

    </div>
    <div class="right">
      <!--路由视图-->
      <router-view></router-view>
    </div>


  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  #app {
    margin: 0px;
    padding: 0px;
  }

  .left {
    width: 300px;
    height: 900px;
    border-right: 1px solid red;
    margin-top: -20px;
    float: left;
  }

  .right{
    margin-left: 320px;
  }

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
