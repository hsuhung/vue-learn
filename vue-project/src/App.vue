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
