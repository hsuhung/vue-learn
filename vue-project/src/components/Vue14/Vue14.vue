<template>
    <div>

      <h3>移动端样式、路由传值</h3>

      <hr />

      <header class="header">
      <router-link to="/vue14_home">首页</router-link>
      <router-link to="/vue14_news">新闻</router-link>
      </header>

      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Vue14"
    }
</script>

<style lang="scss">

  .header{
    height:4.4rem;

    background:#000;

    color:#fff;

    line-height:4.4rem;

    text-align:center;

    a{
      color:#fff;

      padding:0 2rem

    }
  }
</style>
