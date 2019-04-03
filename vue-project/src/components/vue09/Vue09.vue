<template>
    <div>

      <h3>父子组件传值</h3>

      <hr />

      <!--使用组件-->
      <v-parent></v-parent>

      <router-view></router-view>

    </div>
</template>

<script>

  // 导入组件并注册
  import ParentComponent from "./components/ParentComponent.vue"

    export default {
        name: "Vue09",
        data() {
          return undefined;
        },
        components: {
          //组件注册
            "v-parent": ParentComponent
        }
    }
</script>

<style scoped>

</style>
