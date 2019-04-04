<template>
    <div>

      <h4>苹果</h4>

      <button @click="sendRadioToPear()">发送广播数据到Pear</button>

    </div>
</template>

<script>
  //引入VueEvent
  import VueEvent from "../../../model/VueEvent.js"

    export default {
        name: "Apple",
        data() {
          return {
            msg: ""
          }
        },
        methods: {
          sendRadioToPear(){
            //发送广播数据VueEvent.$emit(接收名字, 数据)
            VueEvent.$emit("to-pear", "Hello！\n Pear，I'm Apple! How are you!")
          }
        },
        mounted() {
          //接收广播数据
          VueEvent.$on("to-apple", function (data) {
            console.log("apple接收到的数据\n" + data)
            this.msg = data
          })
        }
    }
</script>

<style scoped>

</style>
