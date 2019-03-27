<template>
  <div>

    <h3>数据读取、列表渲染</h3>

    <hr />

    <h4>属性读取:</h4>
    {{msg}}


    <h4>对象属性读取:</h4>
    姓名：{{obj.name}}   年龄：{{obj.age}}


    <h4>数组遍历:</h4>
    <ul>
      <li v-for="item in arr">{{item.name}}{{item}}</li>
    </ul>


    <h4>数组遍历+对象属性取值+对象内数组遍历:</h4>
    <ul>
      <!--value为每次循环的值，key为循环索引-->
      <li v-for="(value, key) in list">
        {{key}}--> {{value.name}}
        <ul>
          <li v-for="item in value.data">
            {{item.color}}
            {{item.size}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: 'Vue01',
      data () {// 所有数据都放在这里
        return {// 不使用return包裹的数据会在项目的全局可见，会造成变量污染；使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。
          msg: 'Welcome to Your Vue.js App',
          obj: {name: "莉莉", age: 12},
          arr: ["数组一", "数组二", "数组三", "数组四"],
          list: [
            {name: "小米",
              data: [
                {color: "红色", size: "10寸"},
                {color: "蓝色", size: "15寸"},
                {color: "黄色", size: "16寸"}
              ]
            },
            {name: "华为",
              data: [
                {color: "红色", size: "10寸"},
                {color: "蓝色", size: "15寸"},
                {color: "黄色", size: "16寸"}
              ]
            },
            {name: "锤子",
              data: [
                {color: "红色", size: "10寸"},
                {color: "蓝色", size: "15寸"},
                {color: "黄色", size: "16寸"}
              ]
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
