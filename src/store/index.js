import Vue from "vue";
import Vuex from "vuex";
import router from '@/router'
import userStore from "@horo/core/modules/user/store";
import categoryStore from "@horo/core/modules/category/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {
    getRoutePath() {
      return router.currentRoute.path;
    },
    getRouteParams() {
      return router.currentRoute.params;
    },
  },
  modules: {
    userStore,
    categoryStore,
  },
});
