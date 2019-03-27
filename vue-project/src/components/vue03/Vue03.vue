<template>
    <div>

      <h3>双向数据绑定：</h3>

      <hr />

      <!--ref类似于id，唯一标识-->
      <div ref="textRef">数据：{{msg}}</div>
      <!--v-model绑定，数据改变则视图改变，视图改变则数据改变-->
      <input type="text" v-model="msg">
      <button v-on:click="setData()" >设置数据</button>
      <button v-on:click="getData()" >获取数据</button>
      <button v-on:click="getDomByRef()">通过ref设置样式</button>

    </div>
</template>

<script>

  /*描述：v-m(view-model)双向数据绑定   ref获取DOM节点

  双向数据绑定 MVVM vue就是一个MVVM框架
  M model
  V view
  MVVM model改变影响view,view改变影响model*/
    export default {
        name: "Vue03",
        data() {
          return {
            msg: "初始数据"
          }
        },
        methods: {
          setData(){
            this.msg = "改变后的数据"
          },
          getData() {
            alert(this.msg)
          },
          getDomByRef() {
            // 通过节点设置样式
            this.$refs.textRef.style.color = "red"
          }
        }
    }
</script>

<style scoped>

</style>
