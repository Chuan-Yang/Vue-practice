import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import './plugins/vuetify'
import router from './router'
import store from './store'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC7x8Lydcm0XSNq_TFkoOvKdcqH9YxAD7c',
    libraries: 'places'
  }
})
Vue.use(BootstrapVue)
Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
