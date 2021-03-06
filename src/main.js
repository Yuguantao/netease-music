// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import flexible from './plugins/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
flexible(window)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
