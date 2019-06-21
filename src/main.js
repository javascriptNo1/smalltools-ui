import Vue from 'vue'
import App from './App.vue'
// import UniSoftUI from '../dist/SmallTools'
// Vue.use(UniSoftUI)
import SmallToolsUI from './index'
Vue.use(SmallToolsUI)
new Vue({
  el: '#app',
  render: h => h(App)
})
