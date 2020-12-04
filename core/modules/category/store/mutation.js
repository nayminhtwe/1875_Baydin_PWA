import * as types from "./mutation-types";
const mutations = {
  [types.ALL_CATEGORIES](state) {
    state.showLoader = true;
    // this[]
  },
  [types.ALL_CATEGORIES_SUCCESS](state, payload) {
    state.showLoader = false;
    state.list = payload;
  },
  [types.CATEGORY_BY_ID](state) {
    state.showLoader = true;
    // this[]
  },
  [types.CATEGORY_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;
    state.current = payload;
  },
  [types.GET_CONTENTS](state) {
    state.showLoader = true;
    // this[]
  },
  [types.GET_CONTENTS_SUCCESS](state, payload) {
    state.showLoader = false;
    state.contents = payload;
  },
};

export default mutations;
