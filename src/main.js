import Vue from 'vue'
import App from './App.vue'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

// import router
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router
}).$mount('#app')
