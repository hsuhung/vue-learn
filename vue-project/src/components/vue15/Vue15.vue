<template>
    <div>

      <h3>VueX不同组件共享数据</h3>

      <hr />


      <router-link to="/vue15_home">首页</router-link>
      <router-link to="/vue15_news">新闻</router-link>

      <router-view></router-view>

    </div>
</template>

<script>
    export default {
        name: "Vue15"
    }
</script>

<style scoped>

</style>
//路由模块化
//新建router文件夹，并新建router.js到router文件夹
//将原来main.js内的路由配置移动到router.js并暴露出来
//main.js内引用




// vuex的使用：    ------------不同组件间数据共享
//
// 1、src目录下面新建一个vuex的文件夹
// 2、vuex 文件夹里面新建一个store.js
// 3、安装vuex
// cnpm install vuex --save

// 4、在刚才创建的store.js引入vue  引入vuex 并且use vuex
//
// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// 5、定义数据
//
// /*1.state在vuex中用于存储数据*/
// var state={
//
//   count:1
// }
//
//
// 6、定义方法	 mutations里面放的是方法，方法主要用于改变state里面的数据
//
// var mutations={
//
//   incCount(){
//
//     ++state.count;
//   }
// }
//
// 暴露
//
// const store = new Vuex.Store({
//   state,
//   mutations
// })
//
// export default store;
//
//
// 组建里面使用vuex：
//
//
// 		1.引入 store
//
// import store from '../vuex/store.js';
//
//
// 2、注册
//
// export default{
//   data(){
//     return {
//       msg:'我是一个home组件',
//       value1: null,
//
//     }
//   },
//   store,
//   methods:{
//     incCount(){
//
//       this.$store.commit('incCount');   /*触发 state里面的数据*/
//     }
//
//   }
// }
// 3、获取state里面的数据
//
// this.$store.state.数据
//
//
// 4、触发 mutations 改变 state里面的数据
//
// this.$store.commit('incCount');
