import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@s/style/_common.scss' // 自定义全局reset css
import '@s/style/_animate.scss' // animate css


Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
