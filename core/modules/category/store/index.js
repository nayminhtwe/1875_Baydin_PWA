import actions from './action'
import getters from './getter'
import mutations from './mutation'

const categoryStore = {
  namespaced: true,
  state: {
    list: [],
    contents: [
      {
        category_id: 0,
        content: '[]'
      }
    ],
    showLoader: false,
    current: {},
    breadcrumbs: {
      routes: []
    },
    current_product_query: null,
    current_path: [] // list of categories from root to current
  },
  getters,
  actions,
  mutations
}

export default categoryStore
