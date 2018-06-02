// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css' //主题
import ImgLazyLoad from 'vue-lazyload'
import VueScroller from 'vue-scroller'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)


Vue.use(VueScroller)
Vue.use(MuseUI)

/*window.axios = axios;*/
Vue.use(ImgLazyLoad, {
  loading: 'http://image.heitem.com/timg.gif',
  })
/*axios.defaults.baseURL = 'http://api.heitem.com';
axios.defaults.autofaceURL = 'http://api.heitem.com';*/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
