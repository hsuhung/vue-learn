<template>
  <div>
    <!--
        父组件主动获取子组件的数据
        使用子组件时定义一个ref:
        <v-header ref="header"></v-header>
        在父组件中使用：
        this.$refs.header.方法
        this.$refs.header.属性
      -->

    <h3>父组件</h3>

    <div>父组件消息：{{parentMsg}}</div>

    <button @click="parentFunc()">父组件方法</button>
    <br />
    <button @click="parentToChildMsg()">获取子组件数据</button>
    <br />
    <button @click="parentToChildFunc()">调用子组件方法</button>

    <!--为子组件加上ref唯一标识，便于父组件使用子组件的数据-->
    <v-child ref="childRef"></v-child>

  </div>
</template>

<script>
  // 引入组件
  import ChildComponent from "./ChildComponent.vue"

    export default {
        name: "ParentComponent",
        data(){
          return {
            parentMsg: "父组件数据"
          }
        },
      methods: {
          parentFunc(){
            alert("父组件方法")
          },
          parentToChildMsg() {
            // 调用子组件数据
              alert(this.$refs.childRef.childMsg)
          },
          parentToChildFunc() {
            // 调用子组件方法
            this.$refs.childRef.childFunc()
          }
      },
      components: {
          "v-child": ChildComponent
      }
    }
</script>

<style scoped>

</style>
