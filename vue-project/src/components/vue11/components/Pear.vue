<template>
  <div>

    <h4>梨子</h4>

    <button @click="sendRadioToApple()">发送广播数据到Apple</button>

  </div>
</template>

<script>
  //引入VueEvent
  import VueEvent from "../../../model/VueEvent.js"

    export default {
        name: "Pear",
        data() {
          return {
            msg: ""
          }
        },
        methods: {
          sendRadioToApple(){
            //发送广播数据VueEvent.$emit(接收名字, 数据)
            VueEvent.$emit("to-apple", "Hello！\n Apple，I'm Pear! I'm fine!")
          }
        },
        mounted() {
          //接收广播数据
          VueEvent.$on("to-pear", function (data) {
            console.log("pear接收到的数据\n" + data)
            this.msg = data
          })
        }
    }
</script>

<style scoped>

</style>
