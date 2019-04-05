<template>
    <div>

      <h4>这是首页页面</h4>

      <button @click="goNews()">通过js跳转新闻(编程式导航)</button>
      <button @click="goNewsInfo()">通过js跳转到新闻详情(编程式导航)</button>
      <button @click="goNews2()">通过js跳转到新闻详情2(编程式导航)</button>


      <ul>
        <li v-for="(value, key) in list">
          <!--动态传值 ：  传递参数需要绑定数据-->
          <router-link :to="'/vue13_product?productId=' + key">{{value}}</router-link>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
          return{
            list: ["商品一", "商品二", "商品三", "商品四"]
          }
        },
        methods: {
          goNews(){
            //路由到新闻页面
            this.$router.push({path: "vue14_news"})
          },
          goNewsInfo(){
            //路由到新闻详情页面
            this.$router.push({path: "/vue14_content/495"})
          },
          goNews2(){
            //命名式  配置路由时加上别名
            //路由到新闻详情页面
            this.$router.push({name: "vue14_newsInfo", params: {newsId: 497}})
          }
        }
    }
</script>

<style scoped>

</style>
