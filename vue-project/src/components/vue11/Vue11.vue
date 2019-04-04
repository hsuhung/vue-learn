<template>
    <div>
      <!--
      以广播的方式发送数据，即发送组件并不知道接收数据的组件位置，仅知道接收者名字，可比喻为寄信
          非父子组件间传递数据
          新建js文件，然后引入vue并实例化vue，然后导出vue实例
          在需要需要广播的地方引入vue实例
          通过VueEvent.$emit('名称', '数据')发送广播
          通过VueEvent.$on('名称', function(){})接收数据
          -->

      <h3>非父子组件间传递数据</h3>

      <hr />


      <v-apple></v-apple>
      <v-pear></v-pear>

    </div>
</template>

<script>
  // 引入组件并注册
  import Apple from "./components/Apple.vue"
  import Pear from "./components/Pear.vue"

    export default {
        name: "Vue11",
        components: {
          "v-apple": Apple,
          "v-pear": Pear
       }
    }
</script>

<style scoped>

</style>
