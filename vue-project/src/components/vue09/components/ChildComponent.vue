<template>
    <div>

      <h4>这是儿子组件</h4>

      <div v-model="parentMsg">儿子的消息： {{parentMsg}}</div>
      <button @click="parentFunc('这是子组件内的参数')">子组件按钮</button>

    </div>
</template>

<script>
    export default {
        name: "ChildComponent",
        // 父组件传递过来的数据接收后可直接使用

        // 数据接收，不验证数据类型
        // props: ["parentMsg", "parentFunc"]

        // 数据接收，验证数据类型
        props: {
          "parentMsg": String,
          "parentFunc": Function
        }
    }
</script>

<style scoped>

</style>
