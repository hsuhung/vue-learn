<template>
    <div>

      <h3>todoList实现</h3>

      <hr />

      <h4>任务大厅</h4>
      <!--绑定按键事件，按回车键添加数据-->
      <input type="text" v-model="task" @keyup="keyUp($event)">
      <button @click="addTask()">添加任务</button>

      <h4>任务待领取</h4>
      <ul style="background: rgba(103,34,230,0.64); list-style: none;">
        <li v-for="(value, key) in list" v-if="value.flag" style="background: rgba(182,255,35,0.75);">
          {{value.task}}<button @click="addTaskTo(key)">接取</button>
        </li>
      </ul>

      <h4>任务进行中</h4>
      <ul style="background: #58ACFA; list-style: none;">
        <li v-for="(value, key) in list" v-if="!value.flag && value.success == ''" style="background: #F4FA58;">
          {{value.task}}
          <button @click="successTask(key)">完成</button>
          <button @click="cancelTask(key)">取消</button>
        </li>
      </ul>

      <h4>任务已完成</h4>
      <ul style="background: #9ACD32; list-style: none;">
        <li v-for="(value, key) in list" v-if="value.success == 'yes'" style="background: #58FA58;">
          {{value.task}}
          <button @click="removeTask(key)">删除</button>
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "Vue05",
      data() {
          return {
            task: "",
            list: []
          }
      },
      methods: {
        addTask() {//添加任务
          // 由于task已被双向绑定，所以可直接获取task的值，即获取输入框内的数据
          if(this.task != ""){
              this.list.push({task: this.task, flag:"false", success: ""})
            this.task = ""
          }
        },
        keyUp(e){//添加任务
          // e.keyCode获取按键编号
          // this.方法   方法调用
          if(e.keyCode == 13)
            this.addTask()
        },
        addTaskTo(key) {//领取任务
          // 将数组中的flag更改
          var task = this.list[key]
          task.flag = false
          this.list[key] = task
        },
        successTask(key) {//完成任务
          var task = this.list[key]
          task.success = "yes"
          this.list[key] = task
        },
        cancelTask(key) {//取消任务
          // 将数组中的flag更改
          var task = this.list[key]
          task.flag = true
          this.list[key] = task
        },
        removeTask(key) {//删除任务
          this.list.splice(key, 1)
        }
      }
    }
</script>

<style scoped>

</style>
