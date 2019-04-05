import Vue from "vue"
// 引入vuex
import VueX from "vuex"

Vue.use(VueX)

// 定义数据
var state = {// state在vuex中用于存储数据
  count: 1
}

// 定义方法
var mutations = {// mutations在vuex中用于存储方法 主要用于对state中的数据进行操作
  incCount() {
    ++state.count
  }
}

// 实列化对象
const store = new VueX.Store({
  state,// 数据
  mutations// 方法
})

// 导出,便于其他组件等引用
export default store
