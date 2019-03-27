<template>
    <div>

      <h3>数据绑定、class绑定、style绑定</h3>

      <hr />

      <!--
        <div v-bind:title="title">鼠标悬停以查看title内容</div>
        v-bind可省略
       -->
      <h4>title绑定：</h4>
      <div :title="title">鼠标悬停以查看title内容</div>


      <h4>图片属性绑定：</h4>
      <img :src="imageUrl" class="img"/>


      <h4>html绑定(将字符串中的html代码执行出来)：</h4>
      <div v-html="htmlContent"></div>


      <h4>数据绑定的两种方式：</h4>
      <div>方法一：{{msg}}</div>
      <div>方法二：<span v-text="msg"></span></div>


      <h4>class绑定：</h4>
      <div :class="{'red': flag}">红色内容</div>
      <div :class="{'yellow': flag}">黄色内容</div>
      <div :class="{'blue': flag}">蓝色内容</div>


      <h4>style绑定(用于动态设置宽度,即动态设置样式)：</h4>
      <!--因为取得的数据没有单位，所以需要拼接上-->
      <div class="box" :style="{'width': maxWidth + 'px'}"></div>
      <!--v-on:click绑定点击事件-->
      <button v-on:click="changeMaxWidth()">改变颜色宽度</button>

      <h4>红蓝交替显示数据：</h4>
      <ul>
        <li v-for="(value, key) in list"><span :class="{'red': key%2 == 0, 'blue':key%2 != 0}">{{value}}</span></li>
      </ul>


    </div>
</template>

<script>
    export default {
        name: "Vue02",
        data(){// 所有数据都放在这里
          return {
            msg: "这是一个消息内容",
            title: "这是title内容",
            imageUrl: "https://www.baidu.com/img/bd_logo1.png?where=super",
            htmlContent: "<span style='color:red;'>内容</span>",
            flag: "true",
            maxWidth: "10",
            list: ["数据一", "数据二", "数据三", "数据四", "数据五", "数据六", "数据七", "数据八"]
          }
        },
      methods: {// 左右方法都放在这里
        changeMaxWidth() {
          // this.数据  表示获取data()内对应的数据
          this.maxWidth = this.maxWidth + 1
        }
      }

    }
</script>

<style scoped>

  .img {
    width: 200px;
    height: 50px;
  }

  .red {
    color: red;
  }

  .yellow {
    color: yellow;
  }

  .blue {
    color: blue;
  }

  .box {
    height: 30px;
    background: aqua;
  }

</style>
