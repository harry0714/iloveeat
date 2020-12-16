import Vue from 'vue'
import App from './App.vue'
import "@/assets/css/style.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)