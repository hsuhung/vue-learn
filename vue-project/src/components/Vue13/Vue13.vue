<template>
    <div>

      <h3>动态路由</h3>

      <hr />

      <router-link to="/vue13_home">首页</router-link>
      <router-link to="/vue13_news">新闻</router-link>

      <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Vue13"
    }
</script>

<style scoped>

</style>

<!--不同路由传值：动态路由
    1. 配置动态路由
    routes:[
    //动态路径参数已冒号开头
    {path: "/user/id", component: User}
    ]
    2. 在对应页面获取动态路由的值
    this.$route.params
-->
