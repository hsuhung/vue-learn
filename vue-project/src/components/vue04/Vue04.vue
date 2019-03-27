<template>
    <div>

      <h3>vue事件</h3>

      <hr />

      <h4>点击事件</h4>
      <label :title="title">标签：{{msg}}</label>
      <br />
      <!--两种点击事件绑定-->
      <button v-on:click="onclick1()">第一种点击</button>
      <button @click="onclick2()">第一种点击</button>

      <br />

      <button v-on:click="setMsg()">这是msg值</button>
      <button @click="getMsg()">获取msg值</button>
      <button v-on:click="initMsg()">初始化msg值</button>


      <h4>方法传值</h4>
      <button @click="getData('传递的参数')">获取传递的数据</button>

      <h4>对象事件+自定义属性</h4>
      <button data-zdy="自定义属性的数据" @click="getEvent($event)">事件对象及自定义属性</button>



      <h4>模拟请求数据及显示</h4>
      <button @click="requestData()">请求数据</button>
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Vue04",
      data() {
          return {
            title: "title数据",
            msg: "初始数据",
            list: []
          }
      },
      methods: {
        onclick1() {
          alert("v-on:click绑定点击事件")
        },
        onclick2() {
          alert("@click绑定点击事件")
        },
        setMsg() {
          this.msg = "新的数据"
        },
        getMsg() {
          alert(this.msg)
        },
        initMsg() {
          this.msg = "初始数据"
        },
        requestData() {
          // push()方法将数据推送到list中保存，即添加数据到list
          for(var i=1; i<10; i++)
            this.list.push("数据" + i)
        },
        getData(value){
          alert(value)
        },
        getEvent(e){
          console.log(e)
          // 自定义属性的值读取
          alert(e.srcElement.dataset.zdy)
        }
      }
    }
</script>

<style scoped>

</style>
