import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@s/style/_common.scss' // 自定义全局reset css
import '@s/style/_reset.scss' // 自定义全局reset css
import '@s/style/_animate.scss' // animate css

// swiper
import Swiper, { Navigation, Pagination } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.min.css' // css
Swiper.use([Navigation, Pagination])
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
