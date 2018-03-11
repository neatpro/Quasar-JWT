import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store/index'
import {sync} from 'vuex-router-sync'
import routes from './routes'

Vue.use(VueRouter)

Vue.router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build.env.VUE_ROUTER_MODE
   *
   * If you decide to go with "history" mode, please also set "build.publicPath"
   * to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

// Sync Vuex and vue-router;
sync(store, Vue.router)

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = '/backend/api'

import auth from '@websanova/vue-auth'

Vue.use(auth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  rolesVar: 'role'
})

export default Vue.router
