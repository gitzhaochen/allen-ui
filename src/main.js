import Vue from 'vue'
import App from './App.vue'

//全部导入
import AllenUi from '../packages/index.js'
Vue.use(AllenUi)

//按需导入
// import { zgLogo } from '../packages/index.js'
// Vue.use(zgLogo)

new Vue({
  el: '#app',
  render: h => h(App)
})
