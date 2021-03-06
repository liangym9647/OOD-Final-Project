import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon
//import '@/permission'

//GoogleMap
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(ElementUI, { locale })

Vue.use(VueGoogleMaps, {
  load: {
    //please type your API key to use google map
    key: '',
    libraries: 'places',
  }
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})