import Vue from 'vue'
import Vuex from 'vuex'
import userStore from '@horo/core/modules/user/store'
import categoryStore from '@horo/core/modules/category/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userStore,
    categoryStore
  }
})
