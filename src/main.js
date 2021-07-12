import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import moment from 'moment'
import Meta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(LoadScript);
Vue.use(VueSweetalert2);
Vue.use(Meta)

Vue.prototype.moment = moment

Vue.loadScript("/js/kbzpay.js").then(() => {

  Vue.prototype.kbzpay = window.kbzpay
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
