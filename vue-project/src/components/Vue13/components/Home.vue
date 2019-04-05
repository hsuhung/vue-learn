<template>
    <div>

      <h4>这是首页页面</h4>

      <h5>商品列表:get传值</h5>
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
        }
    }
</script>

<style scoped>

</style>
