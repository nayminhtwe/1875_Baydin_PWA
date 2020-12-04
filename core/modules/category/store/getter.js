const getters = {
  getCategories (state) {
    return state.list
  },
  getSpecialCategories (state, getters) {
    return getters.getCategories.filter(category => category.web_url)
  },
  getNormalCategories (state, getters) {
    return getters.getCategories.filter(category => !category.web_url)
  },
  getCurrentCategory (state) {
    return state.current;
  },
  getContents (state) {
    return state.contents;
  },
}

export default getters