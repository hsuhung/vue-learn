<template>
  <div>

  <h4>首页页面</h4>

  <!--读取store中的数据：this.$store.state.数据-->
  <div>数据值：{{this.$store.state.count}}</div>
  <button @click="changeCount()">数据值+1</button>

  </div>
</template>

<script>
  //1. 导入store
  //2. 注册store
  //3. 使用
  //获取数据：this.$store.数据
  //调用方法：this.$store.commit("方法名")   不直接使用方法

  //导入store
  import store from "../vuex/store.js"


    export default {
        name: "News",
        store,// 注册store
        methods: {
          changeCount() {
            // 调用方法
            this.$store.mutations.incCount('incCount')// 触发方法incCount
          }
        }
    }
</script>

<style scoped>

</style>
