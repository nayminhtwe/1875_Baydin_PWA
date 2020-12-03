// eslint-disable-next-line no-unused-vars
import * as types from "./mutation-types";
import { HTTP } from "@core/lib/http-common";

const actions = {
  allCategories({ commit }) {
    commit(types.ALL_CATEGORIES);
    HTTP.get(`category`).then((response) => {
      commit(types.ALL_CATEGORIES_SUCCESS, response.data.data);
    });
  },
  // singleCategory({ commit, rootGetters}) {
  //   commit(types.CATEGORY_BY_ID);
  //   HTTP.get(`category/${rootGetters['getRouteParams'].categoryId}`).then((response) => {
  //     commit(types.CATEGORY_BY_ID_SUCCESS, response.data);
  //   });
  // },
  singleCategory({ commit }, categoryId) {
    commit(types.CATEGORY_BY_ID);
    HTTP.get(`category/${categoryId}`).then((response) => {
      commit(types.CATEGORY_BY_ID_SUCCESS, response.data);
    });
  },
};

export default actions;
