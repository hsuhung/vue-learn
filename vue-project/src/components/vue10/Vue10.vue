<template>
    <div>

      <h3>父子组件相互取数据</h3>

      <hr />

      <v-parent></v-parent>

    </div>
</template>

<script>
  // 组件引入
  import ParentComponent from "./components/ParentComponent.vue"

    export default {
        name: "Vue10",
        components: {
          "v-parent": ParentComponent
        }
    }
</script>

<style scoped>

</style>
