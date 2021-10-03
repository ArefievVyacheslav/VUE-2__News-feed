import Vue from 'vue'
import App from './App.vue'
import store from './store'
import PostForm from './components/PostForm'

Vue.component('PostForm', PostForm)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
