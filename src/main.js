import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import fastclick from 'fastclick'
// import VueLazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'
import Mint from 'mint-ui'

Vue.config.productionTip = false

fastclick.attach(document.body)

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
