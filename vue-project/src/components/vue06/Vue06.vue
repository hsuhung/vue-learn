<template>
    <div>

      <h3>todoList实现之本地存储、模块式，即当前页面刷新数据仍然存在</h3>

      <hr />

      <input type="text" v-model="textData">
      <button @click="addData()">添加数据</button>


      <ul>
        <li v-for="(value, key) in list">
          {{value}}
          <button @click="removeData(key)">移除数据</button>
        </li>
      </ul>

    </div>
</template>

<script>
  /*保存数据：
      	localStorage.setItem('list', JSON.stringify(this.list))
  读取数据：
      	var list = JSON.parse(localStorage.getItem('list'))
  方法mounted()生命周期方法，与data()同级别    页面刷新执行*/

  // 引入storage
  import storage from "../../model/storage.js"
    export default {
        name: "Vue06",
        data() {
          return {
            textData: "",
            list: []
          }
        },
      methods: {
          addData() {
            if(this.textData){
              this.list.push(this.textData)
              // 将数据持久化存储
              storage.set("list", this.list)

              this.textData = ""
            }
          },
        removeData(key) {
            this.list.splice(key, 1)

          // 替换掉旧的数据
          storage.set("list", this.list)
        }
      },
      mounted(){// 生命函数，模板加载完成时调用，可理解为预加载数据
        var list = storage.get("list")
        if(list){
          this.list = list
        }
      }
    }
</script>

<style scoped>

</style>
