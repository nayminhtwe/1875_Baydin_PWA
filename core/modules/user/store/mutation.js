import * as types from './mutation-types'
const mutations = {
  [types.AUTH_REQUEST] (state) {
    state.status = 'loading'
  },

  [types.AUTH_SUCCESS] (state, payload) {
    state.status = 'success'
    state.token = payload.access_token
    state.message = payload.message
  },

  [types.AUTH_ERROR] (state, payload) {
    state.status = 'error'
    state.message = payload.message
    state.errors = payload.errors
  },

  [types.CUST_REQUEST] (state) {
    state.status = 'loading'
  },

  [types.CUST_SUCCESS] (state, payload) {
    state.response = payload.response
    state.openID = payload.openID
  },

  [types.CUST_ERROR] (state, payload) {
    state.status = 'error'
    state.response = payload.response
  },

  [types.PROFILE_REQUEST] (state) {
    state.status = 'loading'
  },
  [types.PROFILE_SUCCESS] (state, payload) {
    state.status = 'success'
    state.current = payload
  },

  [types.PROFILE_ERROR] (state) {
    state.status = 'error'
  },
  [types.LOGOUT] (state) {
    state.token = ''
    state.status = 'logout'
  }
}

export default mutations
