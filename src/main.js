// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入 300 毫秒点击事件延迟问题
import fastClick from 'fastclick'
// 导入轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入 解决手机浏览器默认不支持promise问题
import 'babel-polyfill'
import store from './store'
// 导入 多设备访问显示一致性css
import 'styles/reset.css'
// 导入 解决一像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
