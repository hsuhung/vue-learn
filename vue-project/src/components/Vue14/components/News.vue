<template>
  <div>
    <!--在index.html中加入
    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    能够通过样式修改让页面显示改为手机浏览的样子
    -->

    <ul class="list">
      <li v-for="value in list">
        <!--get传值： 传递参数需要绑定数据-->
        <router-link :to="'/vue14_content/' + value.aid">{{value.title}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
    export default {
        name: "News",
        data() {
          return{
            api: "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1",
            list: []
          }
        },
        mounted() {
            // 获取新闻数据列表
          this.$http.get(this.api).then((response)=> {
            console.log(response)

            this.list = response.body.result
          }).catch((err)=> {
            console.log(err)
          })

        }
    }
</script>

<style lang="scss" scoped>

  .list{

    li{
      height:3.4rem;

      line-height:3.4rem;

      boder-bottom:1px solid #eee;

      font-size:1.6rem;

      a{

        color:#666;


      }
    }
  }

</style>
