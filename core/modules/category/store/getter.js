const getters = {
  allCategories (state) {
    return state.list
  },
  specialCategories (state, getters) {
    return getters.allCategories.filter(category => category.web_url)
  },
  normalCategories (state, getters) {
    return getters.allCategories.filter(category => !category.web_url)
  },
}

export default getters