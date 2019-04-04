<template>
  <div>
    <!--
        子组件主动获取父组件的数据
        this.$parent.方法
        this.$parent.数据
      -->

    <h3>子组件</h3>


    <div>子组件消息：{{childMsg}}</div>

    <button @click="childFunc()">子组件方法</button>
    <br />
    <button @click="childToParentMsg()">获取父组件数据</button>
    <br />
    <button @click="childToParentFunc()">调用父组件方法</button>

  </div>
</template>

<script>
    export default {
        name: "ChildComponent",
      data(){
        return {
          childMsg: "子组件数据"
        }
      },
      methods: {
        childFunc(){
          alert("子组件方法")
        },
        childToParentMsg(){
          //调用父组件数据
          alert(this.$parent.parentMsg)
        },
        childToParentFunc() {
          //调用父组件方法
          this.$parent.parentFunc()
          // 如果方法的调用为相互调用，即父组件方法调用子组件方法；将会陷入死循环
        }
      }
    }
</script>

<style scoped>

</style>
