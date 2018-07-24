# daily-news

## 关于vue dist目录下的几个文件的说明

vue.runtime.js则是运行时的意思，纯粹全是javascript，适用于生产环境，需要经过预编译。
官方说法是用来创建 Vue 实例，渲染并处理 virtual DOM 等行为的代码。基本上就是除去编译器的其他一切。

vue.esm.js，预编译+运行时，也就是模板字符串和现在最常用的单文件组件.vue文件，需要经过它预编译转化成纯javascrit，然后再运行，适用于开发环境。
官方说法叫用来将模板字符串编译成为 JavaScript 渲染函数的代码。

vue.js可以用script标签直接引用

[官方说明](https://cn.vuejs.org/v2/guide/installation.html)
