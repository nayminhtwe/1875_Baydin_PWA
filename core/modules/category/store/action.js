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
  async singleCategory({ commit }, categoryId) {
    commit(types.CATEGORY_BY_ID);
    await HTTP.get(`category/${categoryId}`).then((response) => {
      commit(types.CATEGORY_BY_ID_SUCCESS, response.data);
    });
  },
  async getContents({ commit, dispatch, getters }, categoryId) {
    commit(types.GET_CONTENTS);
    await dispatch("singleCategory", categoryId);

    HTTP.defaults.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYwNTQ5OTkxN30.cW49ls9-1aRANVvbQReNGW4qqMfab-cjLJxFu4qmDaM`;
    HTTP.get(
      `content?category_id=1&content_category_id=${getters.getCurrentCategory.id}`
    ).then((response) => {
      commit(types.GET_CONTENTS_SUCCESS, response.data.data);
    });
  },
};

export default actions;
