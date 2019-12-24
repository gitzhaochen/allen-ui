import Vue from 'vue'
import App from './App.vue'

//全部导入
import AllenUi from '/packages/index.js'
Vue.use(AllenUi)

//全部导入 打包后的文件
// import AllenUi from '../lib/allen-ui.umd.js'
// Vue.use(AllenUi)

//按需导入
// import { zgLogo } from '../packages/index.js'
// Vue.use(zgLogo)

new Vue({
  el: '#app',
  render: h => h(App)
})
