import Vue from 'vue'
import App from './App.vue'

//全部导入
// import AllenUi from '/packages/index.js'
// Vue.use(AllenUi)

//全部导入 打包后的文件
// import AllenUi from '../lib/index'
// import '../lib/index/style/index.css'
// Vue.use(AllenUi)

//按需导入
// import { zgLogo } from '../packages/index.js'
// Vue.use(zgLogo)

//按需导入
import { zgLogo } from 'allen-ui'
// import '../lib/theme-chalk/zg-logo.css'
Vue.use(zgLogo)

new Vue({
  el: '#app',
  render: h => h(App)
})
