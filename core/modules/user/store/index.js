import actions from './action'
import getters from './getter'
import mutations from './mutation'

const userStore = {
  namespaced: true,
  state: {
    token: '',
    refreshToken: '',
    current: null,
    current_storecode: '',
    session_started: new Date(),
    orders_history: null,
    local_data_loaded: false
  },
  getters,
  actions,
  mutations
}

export default userStore