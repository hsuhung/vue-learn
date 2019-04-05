<template>
    <div>

      <h4>新闻内容</h4>

      传递过来的数据：{{info}}

    </div>
</template>

<script>
    export default {
        name: "Content",
      data() {
        return {
          info: ""
        }
      },
      mounted() {
          // 获取数据
        var info = this.$route.params
        console.log(info)
        this.info = info.newsId
      }
    }
</script>

<style scoped>

</style>
