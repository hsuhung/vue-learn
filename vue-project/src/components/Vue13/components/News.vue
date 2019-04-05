<template>
  <div>

    <h4>这是新闻页面</h4>

    <h5>新闻列表:动态路由</h5>
    <ul>
      <li v-for="(value, key) in list">
        <!--get传值： 传递参数需要绑定数据-->
        <router-link :to="'/vue13_content/' + key">{{value}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "News",
        data() {
          return{
            list: ["新闻一", "新闻二", "新闻三", "新闻四"]
          }
        }
    }
</script>

<style scoped>

</style>
