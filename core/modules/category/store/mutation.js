import * as types from './mutation-types'
const mutations = {
   [types.ALL_CATEGORIES] (state) {
    state.showLoader = true
    // this[]
  },
  [types.ALL_CATEGORIES_SUCCESS] (state, payload) {
    state.showLoader = false
    state.list = payload
  }, 
}

export default mutations
