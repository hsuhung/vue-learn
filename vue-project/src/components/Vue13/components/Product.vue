<template>
    <div>

      <h4>商品详情</h4>

      传递过来的数据：{{info}}

    </div>
</template>

<script>
    export default {
        name: "Product",
        data() {
            return {
              info: ""
            }
        },
        mounted() {
          // 获取数据
          var info = this.$route.query
          console.log(info)
          this.info = info.productId
        }
    }
</script>

<style scoped>

</style>
