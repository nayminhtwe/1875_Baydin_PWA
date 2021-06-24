const getters = {
  isAuthenticated: state => !!state.token,
  getUserToken: state => state.token,
  getResponse: state => state.response,
  getOpenID: state => state.openID,
  status: state => state.status
}

export default getters
