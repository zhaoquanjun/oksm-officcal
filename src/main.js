import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import '@s/style/_common.scss' // 自定义全局reset css

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper' // swiper
import 'swiper/swiper.scss' // swiper css
Vue.use(VueAwesomeSwiper)

// map
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'K0uZ8eoO00houxVX2itxWAwHGu4NBGQo'
})

import animate from '@u/animate'
animate.init()

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')