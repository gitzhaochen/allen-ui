import zgLogo from './zg-logo/index.js'
import zgInput from './zg-input/index.js'
const components = [zgLogo, zgInput]
const AllenUi = Object.assign({ installed: false }, components)
const install = function(Vue, opts) {
  if (AllenUi.installed) return
  components.map(component => Vue.component(component.name, component))

  AllenUi.installed = true
}

// 用于script标签引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

AllenUi.install = install

// 输出default变量，用于全量引入
export default AllenUi
// 输出各个组件，用于按需引入
export { zgLogo, zgInput }
