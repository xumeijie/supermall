// 如果项目中有涉及到非父子组件的通信问题，可以选择事件总线来处理参数的传递问题。

// 使用方法：

// 1.bus-->总线;在man.js中添加
Vue.prototype.$bus = new Vue()
// 2.在任意位置发送事件
this.$bus.$emit('事件名称', 参数)
// 3.在任意位置监听事件
this.$bus.$on('事件名称', 回调函数(参数))
// 因为$bus默认是不存在的，所以需要将Vue实例赋值给他，让他可以发送事件。
