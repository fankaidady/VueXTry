// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui' //New Added
import 'element-ui/lib/theme-chalk/index.css' //New Added
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI) //New Added
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
