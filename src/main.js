import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify.js'
import {routes} from './Routes/routes.js'
import {store} from './Store/store.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.use(VueRouter)
Vue.config.productionTip = false


library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes,
  mode:"history"

})
new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
 
}).$mount('#app')
