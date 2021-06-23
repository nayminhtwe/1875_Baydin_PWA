const getters = {
  isAuthenticated: state => !!state.token,
  getDoctorToken: state => state.token,
  getDoctorProfile: state => state.current,
  getResponse: state => state.response,
  getOpenID: state => state.openID,
  status: state => state.status
}

export default getters
