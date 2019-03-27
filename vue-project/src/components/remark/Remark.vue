<template>
    <div>
      <h3>1、为什么在项目中data需要使用return返回数据呢？</h3>
      <pre>
        不使用return包裹的数据会在项目的全局可见，会造成变量污染；使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。
        当一个组件被定义， data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例。如果 data 仍然是一个纯粹的对象，
        则所有的实例将共享引用同一个数据对象！通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
        参考地址:<a href="https://www.cnblogs.com/chengmingxiaowu/p/10044521.html">https://www.cnblogs.com/chengmingxiaowu/p/10044521.html</a>
      </pre>

      <h3>2、什么是localStorage</h3>
      <pre>
        对浏览器来说，使用 Web Storage 存储键值对比存储 Cookie 方式更直观，而且容量更大，它包含两种：localStorage 和 sessionStorage
        sessionStorage（临时存储） ：为每一个数据源维持一个存储区域，在浏览器打开期间存在，包括页面重新加载
        localStorage（长期存储） ：与 sessionStorage 一样，但是浏览器关闭后，数据依然会一直存在
        参考地址:<a href="https://www.cnblogs.com/houzheng/p/9067110.html">https://www.cnblogs.com/houzheng/p/9067110.html</a>
      </pre>


    </div>
</template>

<script>
    export default {
        name: "Remark"
    }
</script>

<style scoped>

</style>
