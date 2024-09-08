// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 Element_ui
import ElementUI from 'element-ui'
// 导入 Element-ui 样式
import 'element-ui/lib/theme-chalk/index.css'
// 插件 Element-ui
Vue.use(ElementUI)
// 导入全局初始化样式
import './assets/index.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
