<template>
    <div id="content">

      <h2>{{info.title}}</h2>

      <div v-html="info.content">{{info.content}}</div>

    </div>
</template>

<script>
    export default {
        name: "Content",
      data() {
        return {
          api: "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=",
          info: ""
        }
      },
      mounted() {
          // 获取新闻id
        var newsId = this.$route.params.newsId
        console.log(newsId)

        //获取新闻详情
        this.$http.get(this.api + newsId).then((response)=> {
          console.log(response)
          this.info = response.body.result[0]
        }).catch((err)=> {
          console.log(err)
        })
      }
    }
</script>

<style lang="scss" scoped>

  #content{

    padding:1rem;

    line-height:2;

    img{

      max-width:100%;
    }
  }

</style>
