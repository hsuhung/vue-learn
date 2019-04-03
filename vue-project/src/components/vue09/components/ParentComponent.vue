<template>
    <div>
      <!-- 当前组件为父组件，传值到子组件Header.vue
          父组件传值给子组件时，需要绑定动态属性
          子组件通过props接收父组件传递的数据
          传递的数据可以是变量、对象、数组、方法等，
          传递的数据名称不能与子组件中的数据名称相同
          注：方法的接收方法名后面不加括号，否则是执行方法
        -->

      <h4>这是父亲组件</h4>

      <div v-model="parentMsg">父亲的消息： {{parentMsg}}</div>
      <button @click="parentFunc('这是父组件内的参数')">父组件按钮</button>

      <!--数据绑定到子组件的标签上表示传值，然后子组件使用prop接收,绑定的数据随意，（变量，数字，方法等）-->
      <v-child :parentMsg="parentMsg" :parentFunc="parentFunc"></v-child>

    </div>
</template>

<script>

  // 引入组件并注册
  import ChildComponent from "./ChildComponent.vue"

    export default {
        name: "ParentComponent",
        data() {
          return {
            parentMsg: "这是父组件内的消息"
          }
        },
        methods: {
          parentFunc(key){
            alert("按钮点击后的内容" + "----> " + key)
          }
        },
      components: {
        //组件注册
        "v-child": ChildComponent
      }
    }
</script>

<style scoped>

</style>
