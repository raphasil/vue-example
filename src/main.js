// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import SessionManager from './core/session-manager'
import CustomDirective from './directives/custom-directive'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(VueAxios, axios)

Vue.mixin({
  data () {
    return {
      manager: SessionManager
    }
  }
})

Vue.directive('custom', CustomDirective)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
