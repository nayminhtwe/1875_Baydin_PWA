import actions from './action'
import getters from './getter'
import mutations from './mutation'

const userStore = {
  namespaced: true,
  state: {
    response: {},
    openID: '',
    token: localStorage.getItem('access_token') || '',
    refreshToken: '',
    current: null,
    status: '',
    message: '',
    errors: []
  },
  getters,
  actions,
  mutations
}

export default userStore