<template>
    <div>

      <v-header></v-header>
      <h5>首页组件</h5>

    </div>
</template>

<script>
  // 引入组件
  import Header from "./Header.vue"
    export default {
        name: "Home",
        data() {
          return {

          }
        },
        components: {// 挂载组件：挂载后就可以使用,使用方式：<v-home></v-home>直接当作标签使用
          //v-home为自定义组件名字，且不能与html元素相同
          "v-header": Header
        }
    }
</script>

<style scoped>

</style>
