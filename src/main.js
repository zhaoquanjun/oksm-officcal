import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@s/style/_common.scss' // 自定义全局reset css
import '@s/style/_animate.scss' // animate css

import rem from '@u/rem'
import utils from '@u/utils'

Vue.config.productionTip = false
const equ = utils.getCurrentEquType()
localStorage.setItem('equ', equ)
if (equ == 'mobile') rem()

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')

