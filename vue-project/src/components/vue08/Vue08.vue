<template>
  <!--
      resource请求数据

      安装插件 ,建议加上--save，其他人使用项目就不需要重新安装该插件
      cnpm install vue-resource --save

      在main.js中导入并使用插件

      请求api
      写法一
      this.$http.get(api地址).then(function(response) {
      },function(err){
      })

      写法二:使用=>可以防止引用错误
      this.$http.get(api地址).then((response)=> {
      }).catch((err)=>{
      })
----------------------------------------------------------------
      axios请求数据

      安装
      cnpm install axios

      哪里需要使用便在哪里引入

      axios请求数据
      Axios.get(api地址).then((response)=>{
      }).catch((err)=>{
      })
    -->
    <div>

      <h3>resource、axios数据请求</h3>

      <hr />

      <h4>预加载数据</h4>
      <ul>
        <li v-for="value in list">{{value.title}}</li>
      </ul>


      <button @click="resourceGetData()">resource请求数据</button>
      <ul>
        <li v-for="value in resourceList">{{value.title}}</li>
      </ul>

      <button @click="axiosGetData()">axios请求数据</button>
      <ul>
        <li v-for="value in axiosList">{{value.title}}</li>
      </ul>


    </div>
</template>

<script>

  // 引入Axios插件
  import Axios from "axios"
    export default {
        name: "Vue08",
        data() {
          return {
            api: "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",
            list: [],
            resourceList: [],
            axiosList: []
          }
        },
      methods: {
        mountedGetData() {// resource请求
          // this.$http.get()请求数据，then()为返回结果，分执行成功和失败
          this.$http.get(this.api).then(function (response) {
            // 成功
            console.log(response)
            this.list = response.body.result
          }, function (err) {
            // 失败
            console.log(err)
          })
        },
        resourceGetData() {// resource请求
          // this.$http.get(this.api)请求数据，then()为返回结果，分执行成功和失败
          this.$http.get(this.api).then(function (response) {
            // 成功
            console.log(response)
            this.resourceList = response.body.result
          }, function (err) {
            // 失败
            console.log(err)
          })
        },
        axiosGetData() {
          //Axios.get(this.api)请求数据
          Axios.get(this.api).then((response)=> {
            console.log(response)
            this.axiosList = response.data.result
          }).catch((err)=> {
            console.log(err)
          })
        }
      },
      mounted() {
          // 预加载数据
        this.mountedGetData()
      }
    }
</script>

<style scoped>

</style>
