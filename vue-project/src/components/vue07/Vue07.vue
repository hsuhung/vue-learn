<template>
  <!--
  App.vue为根组件，其它组件挂载到根组件。App.Vue一般不写模板
  组件一般存放在文件夹components
  组件组成：template模板(包含根节点，一般为div)，业务逻辑（js），样式
  -->
    <div>

      <h3>组件生命周期、组件挂载与卸载</h3>

      <hr />

      <h4>组件引用</h4>

      <!--首页组件-->
      <v-home></v-home>
      <!--头部组件-->
      <v-header></v-header>
      <!--新闻组件-->
      <v-news></v-news>

      <h4>生命周期组件挂载、卸载(console查看执行结果)</h4>

      <!--生命周期组件挂载、卸载-->
      <button @click="flag = !flag">挂载/卸载</button>
      <v-life v-if="flag"></v-life>

    </div>
</template>

<script>
  /*
	 * 引入组件
	 * 挂载组件
	 * 在模板中使用
	 */

  // 引入组件
  import Header from "./components/Header.vue"
  import Home from "./components/Home.vue"
  import News from "./components/News.vue"
  import Life from "./components/Life.vue"

    export default {
        name: "Vue07",
        data() {
            return {
              flag: false
            }
        },
        components: {// 挂载组件：挂载后就可以使用,使用方式：<v-home></v-home>直接当作标签使用
          //v-home为自定义组件名字，且不能与html元素相同
          "v-header": Header,
          "v-home": Home,
          "v-news": News,
          "v-life": Life
        }
    }
</script>

<style scoped>

</style>
