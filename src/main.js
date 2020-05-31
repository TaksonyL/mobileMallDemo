import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// console.log(process.env.BASE_URL)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

