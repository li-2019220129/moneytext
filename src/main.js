import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "normalize.css"
import "./style/base.scss"
import "./style/iconfont.css"
import axios from "axios"
import Vueaxios from "vue-axios"
axios.defaults.baseURL="https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd";
axios.defaults.timeout=5000
Vue.use(Vueaxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
